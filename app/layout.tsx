import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/sonner";
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
  description: "Full Stack & Mobile Developer",
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
    description: "Full Stack & Mobile Developer",
    images: [
      {
        url: "https://www.rafaelfagundes.com/img/profile.png", // Replace with your actual OG image URL
        width: 460,
        height: 460,
        alt: "Rafael Fagundes - Full Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Fagundes",
    description: "Full Stack & Mobile Developer",
    images: ["https://www.rafaelfagundes.com/img/profile.jpg"], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-domain="rafaelfagundes.com"
          src="https://plausible.rfagund.es/js/script.js"
        ></script>
      </head>
      <body
        className={`${sansSerif.className} antialiased bg-[#eaedf1] dark:bg-[#161616] p-4 sm:max-w-xl mx-auto`}
      >
        <Providers>
          <div className="h-[62px]"></div>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <div className="h-10"></div>
        </Providers>
        <Toaster
          toastOptions={{
            unstyled: false,
            classNames: {
              toast:
                "bg-gray-100 dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow-lg border-gray-200 dark:border-zinc-800 border p-4 sm:p-5 w-full max-w-sm",
            },
          }}
        />
      </body>
    </html>
  );
}
