import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Outfit as SansSerif } from "next/font/google";
import Footer from "../components/footer";
import "./globals.css";
import Providers from "./providers";

const sansSerif = SansSerif({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Rafael Fagundes",
  description: "Fullstack / Mobile developer",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaedf1" },
    { media: "(prefers-color-scheme: dark)", color: "#161616" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rafaelfagundes.com", // Replace with your actual URL
    title: "Rafael Fagundes",
    description: "Fullstack / Mobile developer",
    images: [
      {
        url: "https://www.rafaelfagundes.com/img/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Rafael Fagundes - Fullstack / Mobile developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Fagundes",
    description: "Fullstack / Mobile developer",
    images: ["https://www.rafaelfagundes.com/img/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sansSerif.className} antialiased bg-[#eaedf1] dark:bg-[#161616] p-4 sm:max-w-xl mx-auto`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
