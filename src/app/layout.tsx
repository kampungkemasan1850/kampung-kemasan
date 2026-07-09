import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Luxurious_Script, Be_Vietnam_Pro, Dancing_Script, Imperial_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const luxuriousScript = Luxurious_Script({
  variable: "--font-luxurious-script",
  subsets: ["latin"],
  weight: "400",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "400",
});

const ImperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: "400",
});

const Sloop = localFont({
  variable: "--font-sloop",
  src: [
    {
      path: "../../public/assets/fonts/Sloop.ttf",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "Kampung Kemasan",
  description: "Kampung Kemasan Heritage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${luxuriousScript.variable} ${beVietnamPro.variable} ${dancingScript.variable} ${Sloop.variable} ${ImperialScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-be-vietnam-pro">
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="G-GRXZYN21D2" />
    </html>
  );
}
