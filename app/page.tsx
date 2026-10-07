"use client";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Globe, LineChart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-32 relative overflow-hidden">
      <div className="absolute inset-0 z-[-1] h-[120vh] bg-dot-pattern mask-gradient-to-b opacity-60"></div>

      {/* 1. HERO SECTION */}
      <motion.section 
        variants={staggerContainer} initial="hidden" animate="visible"
        className="pt-32 md:pt-48 flex flex-col items-center text-center relative px-4"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md text-xs font-semibold tracking-wide text-zinc-600 shadow-sm cursor-default hover:bg-white transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Platform is performing optimally
        </motion.div>
        
        <motion.h1 variants={fadeUp} className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.85] mb-8 text-zinc-950 max-w-5xl">
          Understand. <br />
          <span className="text-zinc-400">Act. Grow.</span>
        </motion.h1>
        
        <motion.p variants={fadeUp} className="text-lg md:text-2xl text-zinc-500 max-w-2xl mb-12 font-light leading-relaxed">
          The financial operating system for modern teams. We stripped away the noise to make finance simpler, clearer, and faster.
        </motion.p>
        
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="group flex items-center justify-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 hover:bg-zinc-900 transition-all duration-300 shadow-2xl shadow-zinc-900/20">
            Open Account 
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.section>

      {/* 2. INFINITE MARQUEE (Social Proof) */}
      <motion.section 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center py-10 border-y border-zinc-200/50 bg-white/40 backdrop-blur-sm overflow-hidden w-full"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-8">Powering next-generation companies</p>
        <div className="w-full overflow-hidden relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
          
          <div className="animate-marquee flex gap-20 text-zinc-300 font-bold text-2xl md:text-3xl tracking-tighter grayscale items-center">
            {/* Repeated twice to create seamless loop */}
            <span>ACME CORP</span> <span>QUANTUM</span> <span>NEXUS</span> <span>STRIPE</span> <span>VERCEL</span> <span>LINEAR</span>
            <span>ACME CORP</span> <span>QUANTUM</span> <span>NEXUS</span> <span>STRIPE</span> <span>VERCEL</span> <span>LINEAR</span>
          </div>
        </div>
      </motion.section>

      {/* 3. EXPANDED 5-CARD BENTO GRID */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-950 mb-4">Everything you need. <br/><span className="text-zinc-400">Nothing you don't.</span></h2>
        </div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[24rem]"
        >
          {/* Card 1: Main Analytics (Spans 2x2 on large screens) */}
          <motion.div variants={fadeUp} className="lg:col-span-2 lg:row-span-2 bg-white rounded-[2rem] p-8 md:p-12 border border-zinc-200/60 shadow-sm flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10 max-w-sm">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 border border-zinc-200/50">
                <BarChart3 className="text-zinc-900" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-950">Absolute Clarity</h3>
              <p className="text-zinc-500 text-lg leading-relaxed">Your entire financial life visualized. Track growth, analyze spending, and forecast the future instantly.</p>
            </div>
            
            {/* Highly detailed Abstract UI */}
            <div className="absolute -bottom-10 -right-10 w-[110%] md:w-[80%] h-[60%] bg-zinc-50 rounded-tl-2xl border-t border-l border-zinc-200 p-8 flex items-end gap-3 transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4 shadow-2xl">
              {[40, 70, 45, 90, 65, 100].map((height, i) => (
                <div key={i} className="flex-1 bg-zinc-200 rounded-t-md relative overflow-hidden group-hover:bg-zinc-300 transition-colors duration-500" style={{ height: `${height}%` }}>
                  {i === 5 && (
                    <div className="absolute inset-0 bg-zinc-950 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-300 flex items-start justify-center pt-4">
                      <span className="text-white text-xs font-bold">MAX</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Card 2: Lightning Fast */}
          <motion.div variants={fadeUp} className="lg:col-span-1 lg:row-span-1 bg-zinc-950 text-zinc-50 rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <Zap className="text-zinc-400 mb-4" size={28} />
              <h3 className="text-2xl font-medium tracking-tight mb-2">Act Faster</h3>
              <p className="text-zinc-400">Execute trades and move money with zero friction.</p>
            </div>
            {/* Abstract UI: Moving Light */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-800/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.div>

          {/* Card 3: Global Scale */}
          <motion.div variants={fadeUp} className="lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-sm flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <Globe className="text-zinc-900 mb-4" size={28} />
              <h3 className="text-2xl font-medium tracking-tight mb-2">Borderless</h3>
              <p className="text-zinc-500">Hold and transfer multiple currencies natively.</p>
            </div>
            {/* Abstract UI: Expanding Rings */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-zinc-100 rounded-full group-hover:scale-[1.5] transition-transform duration-700"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-zinc-200 rounded-full group-hover:scale-[1.5] transition-transform duration-700 delay-75"></div>
          </motion.div>

          {/* Card 4: Wealth Generation */}
          <motion.div variants={fadeUp} className="lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-sm flex flex-col justify-between relative group overflow-hidden">
            <div className="relative z-10">
              <LineChart className="text-zinc-900 mb-4" size={28} />
              <h3 className="text-2xl font-medium tracking-tight mb-2">Automated Growth</h3>
              <p className="text-zinc-500">Smart routing puts your idle cash to work.</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100">
              <div className="h-full bg-zinc-950 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
            </div>
          </motion.div>

          {/* Card 5: Security */}
          <motion.div variants={fadeUp} className="lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-sm flex flex-col justify-between relative group overflow-hidden">
            <div className="relative z-10">
              <ShieldCheck className="text-zinc-900 mb-4" size={28} />
              <h3 className="text-2xl font-medium tracking-tight mb-2">Bank-grade</h3>
              <p className="text-zinc-500">Protected by enterprise encryption algorithms.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. IMMERSIVE CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="py-32 md:py-48 flex flex-col items-center text-center bg-zinc-950 text-white mt-20 relative overflow-hidden rounded-t-[3rem] mx-2 md:mx-4"
      >
        {/* Glow effect in background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-white/5 rounded-full blur-[100px]"></div>
        
        <h2 className="text-[4rem] md:text-[7rem] font-medium tracking-tighter mb-8 leading-none relative z-10">
          Ready to grow?
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-lg relative z-10 font-light">
          Join thousands of users who have already taken control of their financial future. Takes 2 minutes to set up.
        </p>
        <button className="bg-white text-zinc-950 px-10 py-5 rounded-full text-xl font-medium hover:bg-zinc-200 hover:scale-105 transition-all duration-300 flex items-center gap-3 relative z-10">
          Create Free Account <ArrowRight size={20} />
        </button>
      </motion.section>
    </div>
  );
}