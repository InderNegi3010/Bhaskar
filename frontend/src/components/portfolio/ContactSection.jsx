import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, label: "Email", value: "bhaskar.yoga@email.com", href: "mailto:bhaskar.yoga@email.com" },
    { icon: MapPin, label: "Yoga Center", value: "123 Wellness Street, Peace Nagar", href: "#" },
    { icon: Clock, label: "Available", value: "Mon-Sat: 6AM - 8PM", href: null },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#f5f1eb] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[#dda15e] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3d405b] mb-4 sm:mb-6 px-4">Begin Your Journey</h2>
          <div className="w-16 h-px bg-[#606c38] mx-auto mb-4 sm:mb-6" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#5c5c5c] px-4">
            Ready to transform your life through yoga? Reach out to book a session or learn more about my offerings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="bg-[#3d405b] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">Get in Touch</h3>
              
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#dda15e]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/60 text-xs sm:text-sm mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="hover:text-[#dda15e] transition-colors text-sm sm:text-base break-words">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                <p className="text-xs sm:text-sm text-white/60 italic">
                  "The body benefits from movement, and the mind benefits from stillness."
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-[#e8e4dc] hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
                alt="Location"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#e8e4dc]">
              <h3 className="text-xl sm:text-2xl font-light text-[#3d405b] mb-4 sm:mb-6">Book a Session</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#606c38] mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl text-[#3d405b] mb-2">Thank You!</h4>
                  <p className="text-sm sm:text-base text-[#5c5c5c]">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="text-xs sm:text-sm text-[#5c5c5c] mb-2 block">Full Name</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        required
                        className="border-[#e8e4dc] focus:border-[#606c38] focus:ring-[#606c38]/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-[#5c5c5c] mb-2 block">Email Address</label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        required
                        className="border-[#e8e4dc] focus:border-[#606c38] focus:ring-[#606c38]/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="text-xs sm:text-sm text-[#5c5c5c] mb-2 block">Phone Number</label>
                      <Input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="border-[#e8e4dc] focus:border-[#606c38] focus:ring-[#606c38]/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-[#5c5c5c] mb-2 block">Service Interest</label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => setFormData({...formData, service: value})}
                      >
                        <SelectTrigger className="border-[#e8e4dc] focus:border-[#606c38] focus:ring-[#606c38]/20">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Yoga Sessions</SelectItem>
                          <SelectItem value="center">Yoga Center Classes</SelectItem>
                          <SelectItem value="both">Both Options</SelectItem>
                          <SelectItem value="consult">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm text-[#5c5c5c] mb-2 block">Your Message</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your yoga goals, any health considerations, or questions you have..."
                      rows={4}
                      className="border-[#e8e4dc] focus:border-[#606c38] focus:ring-[#606c38]/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#606c38] hover:bg-[#4a5429] text-white py-5 sm:py-6 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-[10px] sm:text-xs text-center text-[#8b8b8b]">
                    By submitting, you agree to be contacted regarding yoga sessions.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}