import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rollup Boost",
  description: "Upgrade your rollups across performance, programmability, and decentralization",

  openGraph: {
    title: "Rollup Boost",
    description: "Upgrade your rollups across performance, programmability, and decentralization",
    // Update URL
    url: "https://rollup-boost-landing.vercel.app",
    siteName: "Rollup Boost",
    images: [
      {
        url: "https://rollup-boost-landing.vercel.app/images/rollupboost_cover.jpg",
        width: 1200,
        height: 630,
        alt: "Rollup Boost cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rollup Boost",
    description: "Upgrade your rollups across performance, programmability, and decentralization",
    // Update URL
    images: ["https://rollup-boost-landing.vercel.app/images/rollupboost_cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
