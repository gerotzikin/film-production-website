import { motion } from 'motion/react';
import { Play, Award, ExternalLink, Camera } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import rogerDubuisImage from 'figma:asset/24def82d2a02ed2f34e558db557f0aa78ccbd7e0.png';
import pandemoniumImage from 'figma:asset/217e96a3d7f6b3642a8142435fbc88217daf1d9a.png';
import iAmNotADollImage from 'figma:asset/80bf62fa8ccd0b587196d44fc798a2078df3b6a2.png';
import tattoosImage from 'figma:asset/bf5f0fd89bb9ac80a62c8c0aa03dae976470db6b.png';
import identidadTomadaImage from 'figma:asset/aee8db07fe54b04568cf68549bd82b9e3583e718.png';
import alerionImage from 'figma:asset/790460535bfd0069ea30902926b811f9802981da.png';
import vogueImage1 from 'figma:asset/a66dfdf4fd730a90f22d74e3adce4bd61f6f8b00.png';
import vogueImage2 from 'figma:asset/2d7b85dea77d74f341d4b3067b0c69512f75ba79.png';
import vogueImage3 from 'figma:asset/8f69a3d56803a71e6bf4588e3abd8da66d60c557.png';
import studioImage1 from 'figma:asset/d7c68e5c9ae0dc3dadf7487b3c17ecc94a0e5eb6.png';
import studioImage2 from 'figma:asset/01abd2845a0c0c00c09b49016cd473f15ca9c254.png';
import studioImage3 from 'figma:asset/b70866d57c3054b0a7f472e292a7e2d2cd29cc0a.png';
import racingImage1 from 'figma:asset/5dc4d299b202a3b94021bb48fe4812b1dd8d9a91.png';
import racingImage2 from 'figma:asset/a4ce3f7b548f89011b84c8dadff71b40c92ffb46.png';
import racingImage3 from 'figma:asset/91d88f34cfdc6581f85fb1d56edb4a73b99c3f3b.png';
import lifestyleImage1 from 'figma:asset/5868f7aee556a026a30df8cee4fee3c320a78519.png';
import lifestyleImage2 from 'figma:asset/2708d3703cfeaf3aa12484493f6d1af8cb9bef34.png';
import lifestyleImage3 from 'figma:asset/b70366a08bb26ec6a9fd097daacdae085e866cb6.png';
import productImage1 from 'figma:asset/2c5996a2b2c88afe117915e80e2515720c7879d9.png';
import productImage2 from 'figma:asset/a7de7acc56ce1cb63a70cb1230027887298ff11a.png';
import productImage3 from 'figma:asset/8b48395f25e4283ef16a77a3dfa9ce952ebf9c52.png';

const projects = [
  {
    title: 'No Rules Our Game',
    category: 'Commercial',
    description: 'A bold new campaign that transformed brand perception',
    image: rogerDubuisImage,
    color: 'from-brand-red to-brand-orange',
    link: 'https://www.instagram.com/reel/C61nLpuviQXYGyweB1SO5JXQgWvYTts9Yoc3B80/?hl=es'
  },
  {
    title: 'Pandemonium',
    category: 'Feature Film',
    description: 'Award winning picture "Best Picture" Panama Horror Film Fest 2021 as well as Inaugural film for BOGOCINE Bogota Film Festival Edition 37 2020',
    image: pandemoniumImage,
    color: 'from-brand-orange to-brand-yellow',
    link: 'https://youtu.be/v_2xGTRzUUA?si=ZnrGxUyRN0OD9nxs'
  },
  {
    title: 'I Am Not a Doll',
    category: 'Music Video',
    description: 'A striking black and white music video exploring the battle between heart and mind celebrating self-worth, inner strength, and personal empowerment.',
    image: iAmNotADollImage,
    color: 'from-brand-yellow to-brand-red',
    link: 'https://www.instagram.com/reel/C973h13PoVS/'
  },
  {
    title: 'Tattoos',
    category: 'Music Video',
    description: 'A piece that takes viewers through the emotional journey of relationships',
    image: tattoosImage,
    color: 'from-brand-red via-brand-orange to-brand-yellow',
    link: 'https://www.instagram.com/reel/Cr8V2wzOi1r/'
  },
  {
    title: 'Identidad Tomada',
    category: 'Feature Film',
    description: 'Showcasing creativity and innovation',
    image: identidadTomadaImage,
    color: 'from-brand-orange to-brand-red',
    link: 'https://www.youtube.com/watch?v=amLxp-PifDM'
  },
  {
    title: 'May Latin America Give You Wings Today!',
    category: 'Commercial',
    description: "It's for you that we accomplish dreams.",
    image: 'https://i.ytimg.com/vi/8FbCIg-qmdE/hqdefault.jpg',
    color: 'from-brand-red to-brand-orange',
    link: 'https://www.youtube.com/watch?v=8FbCIg-qmdE'
  },
  {
    title: 'Alerion',
    category: 'Commercial',
    description: 'Engaging content that drives conversation',
    image: alerionImage,
    color: 'from-brand-yellow to-brand-orange',
    link: 'https://www.instagram.com/reel/C61nLpuviQXYGyweB1SO5JXQgWvYTts9Yoc3B80/?hl=es'
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Clients' },
  { number: '2M+', label: 'Views Generated' },
  { number: '98%', label: 'Client Satisfaction' }
];

export function WorkPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-foreground to-black text-background overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
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
              <Award className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm">Award-Winning Work</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                portfolio
              </span>
            </h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              Explore our collection of transformative projects that have captivated audiences worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
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
              Featured <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Each project tells a unique story of creativity, innovation, and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                  
                  {/* Play Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm mb-3`}>
                    {project.category}
                  </div>
                  <h3 className="text-2xl mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-orange group-hover:gap-3 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ padding: '2px', zIndex: -1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Gallery Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [-50, 50],
            y: [25, -25]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-background/50 backdrop-blur-md rounded-full border border-border">
              <Camera className="w-4 h-4 text-brand-orange" />
              <span className="text-sm">Photography</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A showcase of our creative work across different mediums
            </p>
          </motion.div>

          {/* Vogue Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Vogue</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={vogueImage1}
                  alt="Vogue fashion editorial"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={vogueImage2}
                  alt="Vogue fashion photoshoot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={vogueImage3}
                  alt="Vogue magazine editorial"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Studio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">Studio</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={studioImage1}
                  alt="Studio photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={studioImage2}
                  alt="Studio photoshoot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={studioImage3}
                  alt="Studio session"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Lifestyle Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-brand-yellow to-brand-red bg-clip-text text-transparent">Lifestyle</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={lifestyleImage1}
                  alt="Lifestyle portrait photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={lifestyleImage2}
                  alt="Lifestyle photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={lifestyleImage3}
                  alt="Lifestyle outdoor photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Racing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">Racing</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={racingImage1}
                  alt="Racing photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={racingImage2}
                  alt="Racing action"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={racingImage3}
                  alt="Racing performance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">Product</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={productImage1}
                  alt="UZZI Product photography - beach scene"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={productImage2}
                  alt="UZZI Product photography - neon lights"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img
                  src={productImage3}
                  alt="UZZI Product photography - lightsaber scene"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-foreground via-black to-foreground text-background relative overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl mb-8 tracking-tight"
          >
            Your story deserves to be{' '}
            <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              told
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-background/80 mb-12"
          >
            Let's create something that stands out and makes an impact
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
            Start your project
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}