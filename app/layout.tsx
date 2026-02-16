import type { Metadata } from "next";
import { content } from "./content";
import "./globals.css";

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
