import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Film, Megaphone, Users, ArrowRight, Sparkles, Award } from 'lucide-react';
import geronimoPhoto from 'figma:asset/7227cffc506a3cf41ebcd62c55da872805a7e8c8.png';
import camiloPhoto from 'figma:asset/c7a038c3f1f908978b00986a313b6c87f99f26c6.png';
import teamJetPhoto from 'figma:asset/e54aa375ad6bbc3e4e577955bf597fd2d1d13c8b.png';

const features = [
  {
    icon: Film,
    title: 'Film Production',
    description: 'Cinematic storytelling that captivates',
    color: 'from-brand-red to-brand-orange'
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Strategic campaigns that convert',
    color: 'from-brand-orange to-brand-yellow'
  },
  {
    icon: Users,
    title: 'Public Relations',
    description: 'Narratives that resonate',
    color: 'from-brand-yellow to-brand-red'
  }
];

export function HomePage() {
  return (
    <div className="size-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1716394381645-8509bceae22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnJpJTIwY2FtZXJhJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTQzODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional ARRI camera"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-brand-red/20 to-brand-orange/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-full blur-2xl"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-brand-yellow" />
            <span className="text-white/90">Award-winning production company</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
          >
            <span className="inline-block">Stories that</span>{' '}
            <span className="inline-block bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              move.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Film production, marketing, and PR that captivates audiences and drives results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Start a project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
            >
              View our work
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-b from-brand-yellow to-brand-red rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
              Meet our{' '}
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                leaders
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Visionaries driving creative excellence and innovation
            </p>
          </motion.div>

          {/* Leadership Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
            {/* Geronimo Tzikin */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={geronimoPhoto}
                  alt="Geronimo Tzikin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Award Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center"
                >
                  <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl md:text-4xl tracking-tight mb-2">Geronimo Tzikin</h3>
                  <p className="text-xl bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent mb-3">
                    CEO & Executive Producer
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-brand-red/10 to-brand-orange/10 rounded-full border border-brand-orange/20">
                    <Award className="w-4 h-4 text-brand-orange" />
                    <span className="text-sm text-foreground/80">International Award-Winning Producer</span>
                  </div>
                </div>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Geronimo Tzikin is an internationally acclaimed producer whose visionary approach has redefined contemporary storytelling. With numerous awards recognizing his exceptional contributions to film and media, Geronimo brings a unique blend of artistic integrity and commercial acumen to every project. His work has captivated global audiences and earned critical acclaim across multiple platforms.
                </p>
                
                <a
                  href="https://www.imdb.com/name/nm12397332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-orange hover:gap-3 transition-all"
                >
                  View IMDB Profile
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Camilo Jimenez Varon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={camiloPhoto}
                  alt="Camilo Jimenez Varon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl md:text-4xl tracking-tight mb-2">Camilo Jimenez Varon</h3>
                  <p className="text-xl bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent mb-3">
                    Director
                  </p>
                </div>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  A multi-talented director and accomplished actor, Camilo brings a rare depth of understanding to both sides of the camera. His extensive acting career has enriched his directorial vision, allowing him to guide performances with unparalleled insight. Camilo's work spans notable productions including <em>Narcos</em>, <em>El Cartel de los Sapos</em>, and <em>Sin Senos Sí Hay Paraíso</em>, where he's demonstrated his versatility across genres and formats.
                </p>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  His unique perspective as both performer and director enables him to craft authentic, emotionally resonant narratives that connect with audiences worldwide. Camilo's dual expertise has become a cornerstone of TZ'IKIN's creative approach.
                </p>
                
                <a
                  href="https://www.imdb.com/name/nm1456568/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-orange hover:gap-3 transition-all"
                >
                  View IMDB Profile
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Company Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h3 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-tight">
                We don't just create content.{' '}
                <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                  We craft legacies.
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto">
                From Hollywood to global markets, TZ'IKIN Productions stands at the intersection of artistry and innovation. Our award-winning team combines decades of industry expertise with cutting-edge creative vision to deliver stories that transcend boundaries and define culture.
              </p>
            </div>

            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <div className="aspect-[21/9] relative">
                <img
                  src={teamJetPhoto}
                  alt="TZ'IKIN Productions Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
                >
                  <span className="text-white">Elevating stories to new heights</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        {/* Background Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-red/5 to-brand-orange/5 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
              What we <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">create</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions for brands that demand excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.a
                key={feature.title}
                href="#services"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="text-2xl mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-foreground/70 mb-4">{feature.description}</p>
                
                <div className="flex items-center gap-2 text-brand-orange group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-black via-foreground to-black text-background relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [-100, 100],
            y: [-50, 50]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [100, -100],
            y: [50, -50]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl mb-8 tracking-tight"
          >
            Ready to create something{' '}
            <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              extraordinary?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-background/80 mb-12 max-w-2xl mx-auto"
          >
            Let's bring your vision to life with world-class production and strategy
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}