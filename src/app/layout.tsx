import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Angel Armas | Full-Stack Developer",
  description:
    "Portfolio of Angel Armas, a full-stack developer specializing in React, Node.js, and MongoDB.",
  openGraph: {
    title: "Angel Armas | Full-Stack Developer",
    description:
      "Portfolio of Angel Armas, a full-stack developer specializing in React, Node.js, and MongoDB.",
    url: siteUrl,
    siteName: "Angel Armas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Angel Armas | Full-Stack Developer",
    description:
      "Portfolio of Angel Armas, a full-stack developer specializing in React, Node.js, and MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
