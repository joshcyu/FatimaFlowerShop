import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Heart, Flower2 } from 'lucide-react';

const storyPoints = [
  {
    icon: Heart,
    title: 'Our Beginning',
    description: 'Started as a flower vendor in Dangwa, Manila. A passion inherited and nurtured.',
  },
  {
    icon: Clock,
    title: 'Legacy Since 2007',
    description: "Adapted from mother's flower business, carrying forward years of floral expertise.",
  },
  {
    icon: Flower2,
    title: 'New Chapter',
    description: 'Bagumbong shop opened January 10, 2025. Fresh start, same dedication.',
  },
  {
    icon: MapPin,
    title: 'Find Us',
    description: 'Greenville Subdivision, Bagumbong Road, Caloocan City. Near SM Caloocan.',
  },
];

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="story" className="py-24 bg-cream relative overflow-hidden">
      {/* Flower anchor */}
      <div data-flower-anchor data-anchor-id="story" data-side="left" className="absolute top-1/4 left-0" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.span
              className="text-accent font-medium tracking-widest uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Our Story
            </motion.span>
            <motion.h2
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              A Journey of <span className="text-gradient-gold">Blooms</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Plus code:</span> Q229+Q59, Manila, Metro Manila
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Offering fresh and dried flowers • Wedding arrangements • Bulk orders
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
