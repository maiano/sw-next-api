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
  title: "Star Wars API — Educational BFF",
  description:
    "Modern Star Wars API with aggregation, expand, filtering and pagination. Educational backend for frontend developers.",

  keywords: [
    "star wars api",
    "swapi alternative",
    "star wars json api",
    "api for frontend",
    "nextjs api example",
    "bff architecture",
  ],

  authors: [{ name: "maiano" }],

  metadataBase: new URL("https://sw-next-api.vercel.app"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Star Wars API",
    description: "Educational Star Wars API for frontend developers",
    url: "https://sw-next-api.vercel.app",
    siteName: "Star Wars API",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Star Wars API",
    description: "Educational Star Wars API for frontend developers",
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
        {children}
      </body>
    </html>
  );
}
