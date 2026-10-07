import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

// Using Inter for that sharp, tech-product aesthetic
const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Fermor | A new standard for finance",
  description: "Understand, act and grow financially. Finance made simpler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-50 text-zinc-950 antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}