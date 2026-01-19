import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Heart, Leaf } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: GraduationCap, label: "Post-Graduate in Yoga", desc: "Advanced academic foundation" },
    { icon: Users, label: "50+ Students Taught", desc: "Transforming lives through yoga" },
    { icon: Heart, label: "Personalized Approach", desc: "Tailored sessions for every individual" },
    { icon: Leaf, label: "Holistic Wellness", desc: "Mind, body & spirit integration" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#dda15e] text-sm tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#3d405b] mb-6">Meet Bhaskar Singh</h2>
          <div className="w-16 h-px bg-[#606c38] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#f5f1eb]">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" 
                alt="Yoga practice"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#606c38]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#dda15e]/10 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-[#3d405b] mb-6">
              A Journey of Self-Discovery & Teaching
            </h3>
            
            <div className="space-y-4 text-[#5c5c5c] leading-relaxed">
              <p>
                With a <strong className="text-[#606c38] font-medium">Post-Graduate degree in Yoga</strong>, 
                I bring a deep academic understanding combined with years of dedicated practice to every session. 
                My journey in yoga began as a personal quest for balance and has evolved into a passionate 
                commitment to helping others discover their own path to wellness.
              </p>
              <p>
                Having successfully guided <strong className="text-[#606c38] font-medium">over 50 students</strong> 
                on their yoga journeys, I understand that each individual is unique. Whether you're a complete 
                beginner seeking stress relief or an experienced practitioner looking to deepen your practice, 
                I create personalized sessions that honor your body's wisdom.
              </p>
              <p>
                My teaching philosophy centers on the belief that yoga is not just physical exercise—it's a 
                transformative practice that unites mind, body, and spirit. I offer both 
                <strong className="text-[#606c38] font-medium"> home sessions</strong> for personalized attention 
                and <strong className="text-[#606c38] font-medium">classes at my yoga center</strong> for those 
                who thrive in a community setting.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-[#f5f1eb]/50 hover:bg-[#f5f1eb] transition-colors"
                >
                  <item.icon className="w-6 h-6 text-[#606c38] mb-2" />
                  <p className="font-medium text-[#3d405b] text-sm">{item.label}</p>
                  <p className="text-xs text-[#8b8b8b] mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}