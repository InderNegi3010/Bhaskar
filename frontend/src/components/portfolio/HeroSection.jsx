import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f1eb] via-[#e8e4dc] to-[#d4cfc4]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative circles */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#a3b18a]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#dda15e]/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Sanskrit Om symbol */}
          <motion.p 
            className="text-6xl mb-6 text-[#606c38]/60"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ॐ
          </motion.p>
          
          <h1 className="font-light text-5xl md:text-7xl lg:text-8xl text-[#3d405b] tracking-tight mb-6">
            Bhaskar Singh
          </h1>
          
          <p className="text-lg md:text-xl text-[#606c38] font-medium tracking-[0.3em] uppercase mb-8">
            Yoga Teacher & Wellness Guide
          </p>
          
          <motion.blockquote 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-xl md:text-2xl text-[#5c5c5c] font-light italic leading-relaxed">
              "Yoga is the journey of the self, through the self, to the self."
            </p>
            <cite className="text-sm text-[#8b8b8b] mt-4 block not-italic">
              — The Bhagavad Gita
            </cite>
          </motion.blockquote>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#contact"
              className="px-8 py-4 bg-[#606c38] text-white rounded-full text-sm tracking-wider uppercase hover:bg-[#4a5429] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-[#606c38]/30 text-[#606c38] rounded-full text-sm tracking-wider uppercase hover:bg-[#606c38]/5 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#606c38]/50 hover:text-[#606c38] transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
}