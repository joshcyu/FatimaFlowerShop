import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { FlowerData } from '@/data/flowers';

interface FlowerModalProps {
  flower: FlowerData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FlowerModal({ flower, isOpen, onClose }: FlowerModalProps) {
  if (!flower) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-background rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            >
              <X size={20} />
            </button>

            {/* Flower image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={flower.image}
                alt={flower.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 pt-0 -mt-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-serif text-3xl font-semibold text-foreground mb-2">
                  {flower.name}
                </h3>
                <p className="text-accent font-medium text-lg mb-4">
                  {flower.symbolism}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {flower.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
