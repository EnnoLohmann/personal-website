const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY_SETTINGS = {
  jpeg: { quality: 80, progressive: true },
  webp: { quality: 80, effort: 6 },
  avif: { quality: 70, effort: 9 },
  png: { quality: 80, compressionLevel: 9 }
};

// Maximum dimensions for different image types
const MAX_DIMENSIONS = {
  portrait: { width: 800, height: 1200 },
  background: { width: 1920, height: 1080 },
  project: { width: 600, height: 400 },
  hobby: { width: 500, height: 350 },
  tech: { width: 400, height: 300 }
};

async function optimizeImage(inputPath, maxWidth, maxHeight) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    console.log(`Optimizing: ${path.basename(inputPath)} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);

    // Get image info
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Skip if image is already small enough
    if (originalSize < 50000 && metadata.width <= maxWidth && metadata.height <= maxHeight) {
      console.log(`  ⏭️  Skipping (already optimized)`);
      return { originalSize, newSize: originalSize, savings: 0 };
    }

    // Calculate new dimensions while maintaining aspect ratio
    let { width, height } = metadata;
    if (width > maxWidth || height > maxHeight) {
      const aspectRatio = width / height;
      if (width > height) {
        width = Math.min(width, maxWidth);
        height = Math.round(width / aspectRatio);
      } else {
        height = Math.min(height, maxHeight);
        width = Math.round(height * aspectRatio);
      }
    }

    // Create temporary output path
    const tempPath = inputPath + '.temp';

    // Optimize based on format
    let pipeline = image.resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true
    });

    const ext = path.extname(inputPath).toLowerCase();

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg(QUALITY_SETTINGS.jpeg);
    } else if (ext === '.png') {
      pipeline = pipeline.png(QUALITY_SETTINGS.png);
    } else if (ext === '.webp') {
      pipeline = pipeline.webp(QUALITY_SETTINGS.webp);
    }

    await pipeline.toFile(tempPath);

    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;

    // Only replace if the new file is smaller
    if (newSize < originalSize) {
      fs.renameSync(tempPath, inputPath);
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      console.log(`  ✓ Reduced from ${(originalSize / 1024 / 1024).toFixed(2)}MB to ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% savings)`);
      return { originalSize, newSize, savings: parseFloat(savings) };
    } else {
      fs.unlinkSync(tempPath);
      console.log(`  ⏭️  Skipping (optimization didn't reduce size)`);
      return { originalSize, newSize: originalSize, savings: 0 };
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function generateWebPVersion(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp(QUALITY_SETTINGS.webp)
      .toFile(outputPath);
    console.log(`  ✓ Generated WebP version: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error generating WebP for ${inputPath}:`, error.message);
  }
}

function getImageCategory(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  const dirName = path.dirname(filePath).toLowerCase();
  
  if (fileName.includes('portrait')) return 'portrait';
  if (fileName.includes('background') || fileName.includes('contact-background')) return 'background';
  if (dirName.includes('hobbies')) return 'hobby';
  if (dirName.includes('tech')) return 'tech';
  return 'project';
}

function getMaxDimensions(category) {
  return MAX_DIMENSIONS[category] || MAX_DIMENSIONS.project;
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let processedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const subResults = await processDirectory(fullPath);
      totalOriginalSize += subResults.totalOriginalSize;
      totalNewSize += subResults.totalNewSize;
      processedCount += subResults.processedCount;
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const category = getImageCategory(fullPath);
        const { width, height } = getMaxDimensions(category);
        
        // Create backup
        const backupPath = fullPath + '.backup';
        if (!fs.existsSync(backupPath)) {
          fs.copyFileSync(fullPath, backupPath);
        }
        
        // Optimize original
        const result = await optimizeImage(fullPath, width, height);
        if (result) {
          totalOriginalSize += result.originalSize;
          totalNewSize += result.newSize;
          processedCount++;
          
          // Generate WebP version if it's not already WebP
          if (ext !== '.webp') {
            const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            await generateWebPVersion(fullPath, webpPath);
          }
        }
      }
    }
  }
  
  return { totalOriginalSize, totalNewSize, processedCount };
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('Public directory not found!');
    process.exit(1);
  }
  
  const results = await processDirectory(PUBLIC_DIR);
  
  console.log('\n📊 Optimization Summary:');
  console.log(`   Images processed: ${results.processedCount}`);
  console.log(`   Original total size: ${(results.totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   New total size: ${(results.totalNewSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total savings: ${((results.totalOriginalSize - results.totalNewSize) / results.totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`   Space saved: ${((results.totalOriginalSize - results.totalNewSize) / 1024 / 1024).toFixed(2)}MB`);
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n💡 Tips:');
  console.log('   - Use Next.js Image component for automatic optimization');
  console.log('   - WebP versions have been generated for better browser support');
  console.log('   - Original images are backed up with .backup extension');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, generateWebPVersion };
