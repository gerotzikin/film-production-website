import { motion } from 'motion/react';

const stats = [
  { value: '200+', label: 'Projects delivered' },
  { value: '50+', label: 'Happy clients' },
  { value: '15+', label: 'Industry awards' },
  { value: '100%', label: 'Dedication' }
];

export function About() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl tracking-tight">
              Crafting experiences that resonate
            </h2>
            <div className="space-y-6 text-xl text-foreground/70 leading-relaxed">
              <p>
                We believe in the power of storytelling to transform brands and create lasting connections with audiences.
              </p>
              <p>
                Our team of creatives, strategists, and technicians work in harmony to deliver work that not only meets expectations but exceeds them.
              </p>
              <p>
                From the first frame to the final campaign, we're committed to excellence at every step.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center lg:text-left space-y-2"
              >
                <div className="text-5xl md:text-6xl tracking-tight">
                  {stat.value}
                </div>
                <div className="text-foreground/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
