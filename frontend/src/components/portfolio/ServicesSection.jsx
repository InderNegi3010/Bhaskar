import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Clock, Users, MapPin, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Home Yoga Sessions",
      subtitle: "Personalized Practice at Your Doorstep",
      description: "Experience the convenience of professional yoga instruction in the comfort of your own home. Perfect for those who prefer privacy, have busy schedules, or simply want undivided attention.",
      features: [
        { icon: Clock, text: "Flexible scheduling" },
        { icon: Users, text: "One-on-one attention" },
        { icon: MapPin, text: "No commute required" },
        { icon: Sparkles, text: "Customized sequences" },
      ],
      image: "/image2.jpg",
      accent: "#606c38",
    },
    {
      icon: Building2,
      title: "Yoga Center Classes",
      subtitle: "Community Practice & Group Energy",
      description: "Join our welcoming yoga center for group classes that harness the power of collective energy. Benefit from a dedicated space designed for optimal practice and connect with fellow yoga enthusiasts.",
      features: [
        { icon: Users, text: "Group motivation" },
        { icon: Sparkles, text: "Professional studio" },
        { icon: Clock, text: "Regular schedules" },
        { icon: MapPin, text: "Peaceful environment" },
      ],
      image: "/image1.jpg",
      accent: "#dda15e",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#f5f1eb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#dda15e] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3d405b] mb-4 sm:mb-6 px-4">How I Can Help You</h2>
          <div className="w-16 h-px bg-[#606c38] mx-auto mb-4 sm:mb-6" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5c5c5c] px-4">
            Choose the practice setting that resonates with your lifestyle and preferences. 
            Both options deliver the same quality of instruction and transformative experience.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-3 sm:-bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-auto md:max-w-xs bg-white rounded-xl shadow-lg p-3 sm:p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${service.accent}15` }}
                    >
                      <service.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: service.accent }} />
                    </div>
                    <div>
                      <p className="font-medium text-[#3d405b] text-xs sm:text-sm">{service.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`pt-6 sm:pt-8 lg:pt-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-light text-[#3d405b] mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {service.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-2 sm:gap-3">
                      <feature.icon className="w-4 h-4 flex-shrink-0" style={{ color: service.accent }} />
                      <span className="text-xs sm:text-sm text-[#5c5c5c]">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                  style={{ 
                    backgroundColor: service.accent, 
                    color: 'white',
                  }}
                >
                  Book This Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}