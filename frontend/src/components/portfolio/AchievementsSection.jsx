import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Medal, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function AchievementsSection() {
  const certifications = [
    {
      icon: GraduationCap,
      title: "Post-Graduate in Yoga",
      institution: "kumaun University",
      description: "Advanced studies in yoga philosophy, anatomy, and teaching methodology"
    },
    {
      icon: Award,
      title: "Certified Yoga Instructor",
      institution: "Yoga Alliance Certified",
      description: "International certification for teaching Hatha and Vinyasa yoga"
    },
    {
      icon: BookOpen,
      title: "Pranayama Specialist",
      institution: "Advanced Breathing Techniques",
      description: "Specialized training in breath control and meditation practices"
    },
  ];

  const achievements = [
    { number: "1000+", label: "Students Taught", icon: Star },
    { number: "5+", label: "Years Experience", icon: Medal },
    { number: "3000+", label: "Sessions Conducted", icon: CheckCircle2 },
    { number: "100%", label: "Student Satisfaction", icon: Award },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#dda15e] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">Credentials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3d405b] mb-4 sm:mb-6 px-4">Achievements & Certifications</h2>
          <div className="w-16 h-px bg-[#606c38] mx-auto" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#f5f1eb] to-[#e8e4dc] hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#dda15e] mx-auto mb-2 sm:mb-3" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#606c38] mb-1">{item.number}</p>
              <p className="text-xs sm:text-sm text-[#5c5c5c]">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl border border-[#e8e4dc] bg-white hover:border-[#606c38]/30 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#606c38]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#606c38]/20 transition-colors">
                  <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#606c38]" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-medium text-[#3d405b] mb-2">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-[#dda15e] mb-2 sm:mb-3">{cert.institution}</p>
                <p className="text-xs sm:text-sm text-[#5c5c5c] leading-relaxed">{cert.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-[#606c38]/10 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}