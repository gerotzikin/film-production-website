import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">Let's create together</h2>
          <p className="text-xl text-background/70 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl">Email</h3>
            <p className="text-background/70">hello@tzikinproductions.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl">Phone</h3>
            <p className="text-background/70">+1 (555) 789-0123</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-yellow to-brand-red flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl">Location</h3>
            <p className="text-background/70">Los Angeles, CA</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="mailto:hello@tzikinproductions.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
