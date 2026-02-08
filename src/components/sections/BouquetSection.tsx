import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { bouquetTypes } from '@/data/flowers';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function BouquetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bouquets" className="py-24 bg-cream relative overflow-hidden">
      {/* Flower anchor */}
      <div data-flower-anchor data-anchor-id="bouquets" data-side="left" className="absolute top-1/3 left-0" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
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
              Curated Collections
            </motion.span>
            <motion.h2
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Bouquet <span className="text-gradient-gold">Flowers</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Thoughtfully arranged bouquets for every occasion. Custom orders always welcome.
            </motion.p>
          </div>

          {/* Custom bouquet highlight */}
          <motion.div
            className="bg-background rounded-2xl p-6 mb-12 flex items-center justify-center gap-4 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-serif text-lg text-foreground">
              Custom Bouquets Available — Let us create your perfect arrangement
            </span>
            <Sparkles className="w-6 h-6 text-accent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {bouquetTypes.map((bouquet, index) => (
              <motion.div
                key={bouquet.id}
                className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-accent">{bouquet.occasion}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {bouquet.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {bouquet.description}
                  </p>
                  <Button
                    onClick={scrollToContact}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Order This Bouquet
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
