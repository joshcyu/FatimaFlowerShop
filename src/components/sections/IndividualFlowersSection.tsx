import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { flowerSymbolisms } from '@/data/flowers';
import { FlowerModal } from '@/components/FlowerModal';
import { Button } from '@/components/ui/button';
import type { FlowerData } from '@/data/flowers';

export function IndividualFlowersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedFlower, setSelectedFlower] = useState<FlowerData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (flower: FlowerData) => {
    setSelectedFlower(flower);
    setIsModalOpen(true);
  };

  return (
    <section id="individual" className="py-24 bg-background relative">
      {/* Flower anchor */}
      <div data-flower-anchor data-anchor-id="individual" data-side="right" className="absolute top-1/4 right-0" />

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
              Single Stems
            </motion.span>
            <motion.h2
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Individual <span className="text-gradient-gold">Flowers</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Each flower carries a unique meaning. Discover the symbolism behind our beautiful blooms.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flowerSymbolisms.slice(0, 12).map((flower, index) => (
              <motion.div
                key={flower.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">
                    {flower.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                    {flower.symbolism}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenModal(flower)}
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    See Symbolism
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <FlowerModal
        flower={selectedFlower}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
