"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-zinc-50/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <Link href="/" className="text-xl font-bold tracking-tighter">
        Fermor<span className="text-zinc-400">.</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
        <Link href="#" className="hover:text-zinc-950 transition-colors">Platform</Link>
        <Link href="#" className="hover:text-zinc-950 transition-colors">Security</Link>
        <Link href="#" className="hover:text-zinc-950 transition-colors">Company</Link>
      </div>

      <div className="flex gap-4 items-center text-sm font-medium">
        <Link href="#" className="hidden md:block text-zinc-500 hover:text-zinc-950 transition-colors">Log In</Link>
        <button className="group flex items-center gap-2 bg-zinc-950 text-zinc-50 px-5 py-2.5 rounded-full hover:bg-zinc-800 hover:scale-105 transition-all">
          Get Started <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
}