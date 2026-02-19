import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { content } from "./content";
import { ThemeProvider } from "./_components/theme-provider";
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
  title: content.site.title,
  description: content.site.description,
  metadataBase: new URL("https://myntlabs.com"),
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    url: "https://myntlabs.com",
    siteName: "MyntLabs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: content.site.title,
    description: content.site.description,
  },
};

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="h-screen overflow-hidden font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
