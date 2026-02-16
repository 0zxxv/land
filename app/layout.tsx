import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transform Your Ideas Into Digital Reality",
  description:
    "We build robust, scalable IT solutions tailored to your unique business needs.",
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
