import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, MessageSquare, Instagram, Facebook, AtSign } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-foreground to-black text-background overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <MessageSquare className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm">Let's talk</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              Start your{' '}
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                project
              </span>
            </h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something extraordinary together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
                  Get in <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">touch</span>
                </h2>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Whether you have a project in mind, need more information about our services, or just want to say hello, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-brand-orange/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Email</h3>
                    <a 
                      href="mailto:hello@tzikinproductions.com"
                      className="text-foreground/70 hover:text-brand-orange transition-colors"
                    >
                      hello@tzikinproductions.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-brand-orange/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Phone</h3>
                    <a 
                      href="tel:+15557890123"
                      className="text-foreground/70 hover:text-brand-orange transition-colors"
                    >
                      +1 (555) 789-0123
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-brand-orange/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-red flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Location</h3>
                    <p className="text-foreground/70">
                      Los Angeles, CA<br />
                      United States
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/tzikinproductions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" strokeWidth={2} />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100082133532746&ref=NONE_xav_ig_profile_page_web#"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" strokeWidth={2} />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.threads.net/@tzikinproductions"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="Threads"
                  >
                    <AtSign className="w-6 h-6" strokeWidth={2} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating Background */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-br from-brand-orange/10 to-brand-yellow/10 rounded-full blur-3xl -z-10"
              />

              <div className="p-8 md:p-10 rounded-3xl border border-border bg-card">
                <h3 className="text-2xl md:text-3xl mb-8 tracking-tight">
                  Send us a <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">message</span>
                </h3>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-foreground/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-foreground/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm text-foreground/70">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm text-foreground/70">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-brand-orange focus:outline-none transition-colors"
                    >
                      <option>Select a service</option>
                      <option>Film Production</option>
                      <option>Marketing</option>
                      <option>Public Relations</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm text-foreground/70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-brand-orange focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-32 bg-gradient-to-br from-foreground via-black to-foreground text-background relative overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl mb-6 tracking-tight"
          >
            Prefer to meet in person?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-background/80 mb-8"
          >
            We'd love to show you around our studio and discuss your project over coffee
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            href="mailto:hello@tzikinproductions.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a visit
          </motion.a>
        </div>
      </section>
    </div>
  );
}