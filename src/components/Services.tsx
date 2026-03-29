import { motion } from 'motion/react';
import { Film, Megaphone, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Film,
    title: 'Film Production',
    description: 'From concept to final cut, we create cinematic content that tells your story with precision and artistry.',
    image: 'https://images.unsplash.com/photo-1693645325820-03c4be5b7031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5MzIzNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Commercials', 'Brand Films', 'Documentaries', 'Social Content'],
    accentColor: 'brand-red'
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Strategic campaigns that amplify your brand and connect with audiences across every platform.',
    image: 'https://images.unsplash.com/photo-1729835468973-0bb7a47cf491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjcmVhdGl2ZSUyMGFnZW5jeXxlbnwxfHx8fDE3NTk0MzgzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Digital Strategy', 'Content Marketing', 'Social Media', 'Brand Development'],
    accentColor: 'brand-orange'
  },
  {
    icon: Users,
    title: 'Public Relations',
    description: 'Build meaningful relationships and manage your narrative with strategic PR that makes an impact.',
    image: 'https://images.unsplash.com/photo-1707301280425-475534ec3cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU5MzgyNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Media Relations', 'Crisis Management', 'Event Coverage', 'Reputation Management'],
    accentColor: 'brand-yellow'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">What we do</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions for brands that demand excellence
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <service.icon className={`w-12 h-12 text-${service.accentColor}`} strokeWidth={1.5} />
                <h3 className="text-3xl md:text-5xl tracking-tight">{service.title}</h3>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.accentColor}`} />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
