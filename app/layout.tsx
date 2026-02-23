import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { content } from "./content";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myntlabs",
  description: content.site.description,
  icons: {
    icon: "/assets/icon-blue.svg",
  },
  metadataBase: new URL("https://myntlabs.com"),
  openGraph: {
    title: "Myntlabs",
    description: content.site.description,
    url: "https://myntlabs.com",
    siteName: "Myntlabs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myntlabs",
    description: content.site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body className="h-screen overflow-hidden font-sans antialiased">{children}</body>
    </html>
  );
}
