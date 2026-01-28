import React from "react";
import { motion as Motion } from "framer-motion";
import { GraduationCap, Users, Heart, Leaf } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Post-Graduate in Yogic Science",
      desc: "Advanced academic foundation",
    },
    {
      icon: Users,
      label: "1000+ Students Taught",
      desc: "Transforming lives through yoga",
    },
    {
      icon: Heart,
      label: "Personalized Approach",
      desc: "Tailored sessions for every individual",
    },
    {
      icon: Leaf,
      label: "Holistic Wellness",
      desc: "Mind, body & spirit integration",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[#dda15e] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3d405b] mb-4 sm:mb-6 px-4">
            Meet Bhaskar Singh
          </h2>
          <div className="w-16 h-px bg-[#606c38] mx-auto" />
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#f5f1eb]">
              <img
                src="/profile.jpg"
                alt="Yoga practice"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-32 sm:w-48 h-32 sm:h-48 border-2 border-[#606c38]/20 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-[#dda15e]/10 rounded-full -z-10" />
          </Motion.div>

          {/* Content */}
          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-light text-[#3d405b] mb-4 sm:mb-6">
              A Journey of Self-Discovery & Teaching
            </h3>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
              <p>
                With a{" "}
                <strong className="text-[#606c38] font-medium">
                  Post-Graduate degree in Yogic Science
                </strong>
                , I bring a deep academic understanding combined with years of
                dedicated practice to every session. My journey in yoga began as
                a personal quest for balance and has evolved into a passionate
                commitment to helping others discover their own path to
                wellness.
              </p>
              <p>
                Having successfully guided{" "}
                <strong className="text-[#606c38] font-medium">
                  over 50 students{" "}
                </strong>
                on their yoga journeys, I understand that each individual is
                unique. Whether you're a complete beginner seeking stress relief
                or an experienced practitioner looking to deepen your practice,
                I create personalized sessions that honor your body's wisdom.
              </p>
              <p>
                My teaching philosophy centers on the belief that yoga is not
                just physical exercise—it's a transformative practice that
                unites mind, body, and spirit. I offer both
                <strong className="text-[#606c38] font-medium">
                  {" "}
                  home sessions
                </strong>{" "}
                for personalized attention and{" "}
                <strong className="text-[#606c38] font-medium">
                  classes at my yoga center
                </strong>{" "}
                for those who thrive in a community setting.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
              {highlights.map((item, index) => (
                <Motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-3 sm:p-4 rounded-xl bg-[#f5f1eb]/50 hover:bg-[#f5f1eb] transition-colors"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#606c38] mb-2" />
                  <p className="font-medium text-[#3d405b] text-xs sm:text-sm">
                    {item.label}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#8b8b8b] mt-1">
                    {item.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
