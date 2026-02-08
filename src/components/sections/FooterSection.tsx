import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Individual Flowers', href: '#individual' },
  { name: 'Bouquets', href: '#bouquets' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Wedding & Bulk', href: '#wedding' },
  { name: 'Contact', href: '#contact' },
];

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-foreground text-background relative overflow-hidden">
      {/* Flower anchor - final position */}
      <div data-flower-anchor data-anchor-id="footer" data-side="right" className="absolute top-1/2 right-0" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Fatima Flower Shop
          </motion.h2>

          {/* Navigation Links */}
          <motion.nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.nav>

          {/* Thank you message */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
            <p className="font-serif text-xl italic text-background/90">
              "Thank you for choosing Fatima Flower Shop."
            </p>
          </motion.div>

          {/* Location */}
          <motion.p
            className="text-sm text-background/60 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Greenville Subdivision, Bagumbong Road, Caloocan City • Near SM Caloocan
          </motion.p>

          {/* Copyright */}
          <motion.p
            className="text-xs text-background/40"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            © {new Date().getFullYear()} Fatima Flower Shop. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
