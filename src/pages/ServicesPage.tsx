import { motion } from 'motion/react';
import { Film, Megaphone, Users, ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const services = [
  {
    icon: Film,
    title: 'Film Production',
    tagline: 'Cinematic storytelling that captivates',
    description: 'From concept to final cut, we create cinematic content that tells your story with precision and artistry. Our award-winning team brings decades of experience in crafting visual narratives that resonate.',
    image: 'https://images.unsplash.com/photo-1693645325820-03c4be5b7031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5MzIzNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Commercials', 'Brand Films', 'Documentaries', 'Social Content', 'Music Videos', 'Corporate Videos'],
    color: 'from-brand-red to-brand-orange'
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    tagline: 'Strategic campaigns that convert',
    description: 'Strategic campaigns that amplify your brand and connect with audiences across every platform. We combine data-driven insights with creative excellence to deliver measurable results.',
    image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY0MTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Digital Strategy', 'Content Marketing', 'Social Media', 'Brand Development', 'SEO & Analytics', 'Influencer Campaigns'],
    color: 'from-brand-orange to-brand-yellow'
  },
  {
    icon: Users,
    title: 'Public Relations',
    tagline: 'Narratives that resonate',
    description: 'Build meaningful relationships and manage your narrative with strategic PR that makes an impact. We craft compelling stories and secure media coverage that elevates your brand.',
    image: 'https://images.unsplash.com/photo-1707301280425-475534ec3cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU5MzgyNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Media Relations', 'Crisis Management', 'Event Coverage', 'Reputation Management', 'Press Releases', 'Spokesperson Training'],
    color: 'from-brand-yellow to-brand-red'
  }
];

export function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-foreground to-black text-background overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
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
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm">
                Our Services
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              Excellence in every{' '}
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                frame
              </span>
            </h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              Comprehensive solutions that transform brands and captivate audiences across all platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-40">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-20 items-center relative`}
              >
                {/* Floating Background Element */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 w-72 h-72 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-3xl -z-10`}
                />

                <div className="flex-1 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative group"
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </motion.div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </motion.div>
                  
                  <div>
                    <h2 className="text-4xl md:text-5xl tracking-tight mb-3">{service.title}</h2>
                    <p className={`text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                      {service.tagline}
                    </p>
                  </div>
                  
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full hover:opacity-90 transition-opacity mt-6`}
                  >
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-foreground via-black to-foreground text-background relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [-50, 50],
            y: [-25, 25]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl mb-8 tracking-tight"
          >
            Let's create something{' '}
            <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              remarkable
            </span>
          </motion.h2>
          
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Start your project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}