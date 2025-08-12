'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate WebP source path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || (
    fill 
      ? '100vw'
      : width && width > 768 
        ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        : '(max-width: 768px) 100vw, 50vw'
  );

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
      <picture>
        {/* WebP source for modern browsers */}
        <source srcSet={webpSrc} type="image/webp" />
        
        {/* Fallback to original format */}
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={responsiveSizes}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
    </div>
  );
}
