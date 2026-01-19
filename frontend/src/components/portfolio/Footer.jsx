import React from 'react';
import { Heart, Instagram, Facebook } from 'lucide-react';


export default function Footer() {
  // Replace these with your actual social media links
  const INSTAGRAM_URL = "https://www.instagram.com/your_instagram_handle";
  const FACEBOOK_URL = "https://www.facebook.com/your_facebook_page";

  return (
    <footer className="bg-[#3d405b] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <span className="text-3xl text-[#dda15e]">ॐ</span>
            <span className="font-light text-xl">Bhaskar Singh Yoga</span>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#dda15e] flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#dda15e] flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-[#dda15e] transition-colors">About</a>
            <a href="#services" className="hover:text-[#dda15e] transition-colors">Services</a>
            <a href="#achievements" className="hover:text-[#dda15e] transition-colors">Credentials</a>
            <a href="#testimonials" className="hover:text-[#dda15e] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#dda15e] transition-colors">Contact</a>
          </nav>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 w-full text-center">
            <p className="text-sm text-white/50 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-[#dda15e]" /> for wellness
            </p>
            <p className="text-xs text-white/40 mt-2">
              © {new Date().getFullYear()} Bhaskar Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}