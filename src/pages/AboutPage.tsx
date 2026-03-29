import { motion } from 'motion/react';
import { Target, Heart, Zap, Users, Award, TrendingUp, FileText, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import bogocineAward from 'figma:asset/4cc0f7905b87c7f339ceef1d0ec7da225fbc644d.png';
import panamaHorrorAward from 'figma:asset/3fc0493632141cb8774070d8812dd4044b1102cf.png';
import seoulWinnerAward from 'figma:asset/4e91c90c42c37c6bb541d0d954c0adb2d1b187f1.png';
import tokyoAward from 'figma:asset/3ae73f118a3ebfddb1b0d2115eba43de2e2af27d.png';
import musicVideoAward from 'figma:asset/dd5a69587def012796baceedc084cf6c7bbc631d.png';
import seoulAward from 'figma:asset/31e78d5f3f99822ad4ee5ba21518283728e62b58.png';
import teamPhoto from 'figma:asset/9fab4b8b20016604d7d120ab4aa7f06ea16498b9.png';
import rogerDubuisLogo from 'figma:asset/204545224d19ed5bf3d9fd4b3e76314500a6a6a9.png';
import aviancaLogo from 'figma:asset/1e8209f69ce577f2087b291ea997dd4531749487.png';
import ferreroRocherLogo from 'figma:asset/703fe6c2153d6defbdf1af80081accab570eea85.png';
import century21Logo from 'figma:asset/5be2d6b17043149d75d0036cb3885b790561ab3d.png';
import renaultLogo from 'figma:asset/9bbc54fda3b1e2c4aeb7e8a41e7ada748559220e.png';
import alerionLogo from 'figma:asset/a61c69888fcbd69404336aefc7f038439e0347aa.png';
import crmRefreshLogo from 'figma:asset/ca76b8c08913821df7ec0ba17c2ee146d49b25cd.png';
import dwellWellLogo from 'figma:asset/a668b169dccfd367bcf2aa337b1bdf426b204760.png';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our hearts into every frame, every campaign, every story we tell',
    color: 'from-brand-red to-brand-orange'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing boundaries and exploring new creative territories with every project',
    color: 'from-brand-orange to-brand-yellow'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Uncompromising quality in execution, from pre-production to final delivery',
    color: 'from-brand-yellow to-brand-red'
  }
];

const stats = [
  {
    icon: Users,
    number: '25+',
    label: 'Team Members',
    description: 'Creative professionals'
  },
  {
    icon: Award,
    number: '150+',
    label: 'Projects Completed',
    description: 'Industry recognition'
  },
  {
    icon: TrendingUp,
    number: '10+',
    label: 'Years',
    description: 'Industry experience'
  }
];

const pressReleases = [
  {
    title: 'Shima Katouzian Work Published in Vogue Mexico',
    date: 'December 2024',
    excerpt: 'Our collaborative work with makeup artist Shima Katouzian, creator of BODO makeup, featured in Vogue Mexico celebrating innovative beauty and creative excellence.',
    link: 'https://www.vogue.mx/articulo/shima-katouzian-creadora-de-bodo-makeup'
  },
  {
    title: 'Voyage LA Interview: Meet Geronimo Tzikin',
    date: 'November 2023',
    excerpt: 'Our Executive Producer Geronimo Tzikin shares the TZ\'IKIN Productions story, creative vision, and insights on building a successful production company in Los Angeles.',
    link: 'https://voyagela.com/interview/meet-geronimo-tzikin-of-tzikin-productions'
  }
];

const clients = [
  { name: 'Roger Dubuis', logo: rogerDubuisLogo },
  { name: 'Avianca', logo: aviancaLogo },
  { name: 'Ferrero Rocher', logo: ferreroRocherLogo },
  { name: 'Century21', logo: century21Logo },
  { name: 'Renault', logo: renaultLogo },
  { name: 'CRM Refresh', logo: crmRefreshLogo },
  { name: 'Dwell Well Innovations', logo: dwellWellLogo },
  { name: 'Alerion Aviation', logo: alerionLogo }
];

export function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-foreground to-black text-background overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
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
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm">
                About Us
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              We create{' '}
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                stories
              </span>{' '}
              that matter
            </h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              A passionate team of storytellers, creators, and strategists dedicated to bringing your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl tracking-tight">
                Our <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">story</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                TZ'IKIN Productions was born from a simple belief: every brand has a story worth telling, and every story deserves to be told beautifully.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                What started as a small collective of filmmakers and creatives has grown into a full-service production company that combines cinematic excellence with strategic insight. We've produced award-winning content for brands across industries, from startups to Fortune 500 companies.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our name, TZ'IKIN, is inspired by the Mayan word for bird - symbolizing freedom, perspective, and the ability to see the bigger picture. We bring that vision to every project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <img
                  src={teamPhoto}
                  alt="Our creative team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-brand-yellow/20" />
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-3xl blur-2xl opacity-60"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Top Clients Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [-50, 50],
            y: [-25, 25]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"
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
              Our Top <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Clients</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Trusted by leading brands around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-8 rounded-2xl bg-card border border-border flex items-center justify-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-20 object-contain relative z-10"
                  />
                ) : (
                  <span className="text-lg tracking-tight relative z-10 text-center">{client.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Awards Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"
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
              Our <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow bg-clip-text text-transparent">Awards</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Recognized for excellence in filmmaking and creative innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { image: bogocineAward, name: 'BOGOCINE 2020' },
              { image: panamaHorrorAward, name: 'Panama Horror Film Festival 2023' },
              { image: seoulWinnerAward, name: 'Seoul Film Festival Winner 2024' },
              { image: tokyoAward, name: 'Tokyo Film Festival 2025' },
              { image: musicVideoAward, name: 'Music Video Awards Finalists' },
              { image: seoulAward, name: 'Seoul International Selection' }
            ].map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border p-8 flex items-center justify-center relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-brand-orange/5 to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <img 
                    src={award.image} 
                    alt={award.name}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <p className="text-white text-center w-full">{award.name}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
              Our <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">values</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-card border border-border overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-1 transition-opacity duration-300`} />
                
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                >
                  <value.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="text-2xl mb-3 tracking-tight">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
              By the <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">numbers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center relative group"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-yellow/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <div className="relative p-8 rounded-3xl border border-border bg-card">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center mx-auto mb-6"
                  >
                    <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  
                  <div className="text-5xl mb-2 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <h3 className="text-xl mb-2">{stat.label}</h3>
                  <p className="text-foreground/60">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [50, -50],
            y: [25, -25]
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl"
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
              Press <span className="bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">Releases</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Latest news and announcements from TZ'IKIN Productions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-3xl bg-card border border-border group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-foreground/60">{release.date}</span>
                  </div>
                  
                  <h3 className="text-2xl mb-4 tracking-tight">{release.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{release.excerpt}</p>
                  
                  <a
                    href={release.link}
                    className="inline-flex items-center gap-2 text-brand-orange hover:gap-3 transition-all"
                  >
                    Read more
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-32 bg-gradient-to-br from-foreground via-black to-foreground text-background relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [-100, 100],
            y: [-50, 50]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695014192203-291edf9e4842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NTk0MTk2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our studio"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-red to-brand-orange rounded-3xl blur-2xl opacity-60"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl tracking-tight">
                Join our{' '}
                <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                  journey
                </span>
              </h2>
              <p className="text-xl text-background/80 leading-relaxed">
                We're always looking for talented individuals who share our passion for storytelling and creative excellence.
              </p>
              <p className="text-lg text-background/70 leading-relaxed">
                Whether you're a filmmaker, strategist, or creative professional, we'd love to hear from you.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white rounded-full hover:opacity-90 transition-opacity mt-4"
              >
                Get in touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}