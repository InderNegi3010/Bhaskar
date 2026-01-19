import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      content: "Bhaskar sir's home yoga sessions have been life-changing for me. His patient teaching style and deep knowledge of yoga philosophy helped me manage my work stress effectively. I've never felt more balanced.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content: "After trying many yoga instructors, I finally found someone who truly understands the essence of yoga. Bhaskar ji's approach goes beyond physical postures—he teaches you to connect with your inner self.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Homemaker",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      content: "The yoga center classes are wonderful! The atmosphere is so peaceful, and Bhaskar sir makes everyone feel comfortable regardless of their skill level. My flexibility and energy levels have improved tremendously.",
      rating: 5,
    },
    {
      name: "Dr. Vikram Singh",
      role: "Medical Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      content: "As a doctor, I appreciate Bhaskar's anatomically-informed approach to yoga. He understands body mechanics and modifies poses appropriately. I recommend his classes to many of my patients.",
      rating: 5,
    },
    {
      name: "Meera Iyer",
      role: "College Student",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      content: "Started yoga to help with exam anxiety and found so much more. Bhaskar sir taught me breathing techniques that I use daily. His post-graduate knowledge really shows in how he explains everything.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#3d405b] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#dda15e] text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">What Students Say</h2>
          <div className="w-16 h-px bg-[#606c38] mx-auto" />
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <Quote className="w-12 h-12 text-[#606c38]/20 mb-6" />
              
              <p className="text-lg md:text-xl text-[#5c5c5c] leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#606c38]/20"
                  />
                  <div>
                    <p className="font-medium text-[#3d405b]">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-[#8b8b8b]">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#dda15e] text-[#dda15e]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#dda15e] w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}