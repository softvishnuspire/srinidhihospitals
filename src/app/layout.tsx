import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srinidhi Hospitals | Modern Multi-Specialty Care in Amalapuram",
  description:
    "Compassionate doctors, advanced facilities, and 24/7 Emergency services under one roof. Dedicated to restoring your health with precision.",
  keywords: [
    "hospital",
    "healthcare",
    "amalapuram",
    "multi-specialty",
    "emergency care",
    "andhra pradesh",
    "srinidhi hospitals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="bg-white text-on-surface min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
