import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enno Lohmann - Fullstack Developer & Software Architect",
  description: "Passionate fullstack developer specializing in Java and modern web frameworks. 8+ years of experience delivering exceptional software solutions across diverse industries.",
  keywords: ["Enno Lohmann", "Fullstack Developer", "Java Developer", "Software Architect", "Web Development", "Portfolio"],
  authors: [{ name: "Enno Lohmann" }],
  creator: "Enno Lohmann",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#1f2937',
  openGraph: {
    title: "Enno Lohmann - Fullstack Developer & Software Architect",
    description: "Passionate fullstack developer with 8+ years of experience creating exceptional software solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enno Lohmann - Fullstack Developer & Software Architect",
    description: "Passionate fullstack developer with 8+ years of experience creating exceptional software solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="w-full">
          <div className="w-full max-w-none">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
