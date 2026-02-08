import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";

// 3D-like rose PNG images for bloom progression
const flowerStates = {
  bud: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=200&auto=format&fit=crop",
  halfBloom:
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=200&auto=format&fit=crop",
  fullBloom:
    "https://images.unsplash.com/photo-1518882605630-8eb903ff7d5c?w=200&auto=format&fit=crop",
};

interface AnchorPosition {
  id: string;
  y: number;
  side: "left" | "right";
}

export function ScrollFlower() {
  const [anchors, setAnchors] = useState<AnchorPosition[]>([]);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Call useScroll only once
  const { scrollY, scrollYProgress } = useScroll();

  // Spring configs
  const springConfig = useMemo(() => ({ stiffness: 50, damping: 20, mass: 1 }), []);
  const xSpring = useSpring(0, springConfig);
  const ySpring = useSpring(100, springConfig);
  const rotateSpring = useSpring(0, { stiffness: 100, damping: 30 });
  const scaleSpring = useSpring(0.6, { stiffness: 100, damping: 20 });

  // Bloom progress driven by scroll
  const bloomProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  /**
   * IMPORTANT FIX:
   * These useTransform calls were previously inside JSX.
   * That makes hook order conditional because you return null on mobile.
   * Keep them here so hooks are called every render, always.
   */
  const budOpacity = useTransform(bloomProgress, [0, 0.3], [1, 0]);
  const halfOpacity = useTransform(bloomProgress, [0.2, 0.5, 0.7], [0, 1, 0]);
  const fullOpacity = useTransform(bloomProgress, [0.6, 1], [0, 1]);

  const glowScale = useTransform(bloomProgress, [0.5, 1], [0.8, 1.5]);
  const glowOpacity = useTransform(bloomProgress, [0.5, 1], [0.3, 0.6]);

  // Track viewport
  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Collect anchors
  useEffect(() => {
    const collectAnchors = () => {
      const anchorElements = document.querySelectorAll<HTMLElement>("[data-flower-anchor]");
      const collected: AnchorPosition[] = [];

      anchorElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY;
        collected.push({
          id: el.getAttribute("data-anchor-id") || `anchor-${index}`,
          y: rect.top + scrollTop,
          side: (el.getAttribute("data-side") as "left" | "right") || "right",
        });
      });

      // Ensure anchors are sorted by Y
      collected.sort((a, b) => a.y - b.y);
      setAnchors(collected);
    };

    const t = window.setTimeout(collectAnchors, 200);
    window.addEventListener("resize", collectAnchors);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", collectAnchors);
    };
  }, []);

  // Drive follower by scroll
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (currentY) => {
      // if mobile or no anchors, do nothing
      if (anchors.length === 0 || windowWidth < 768) return;

      // Find current anchor index based on scroll
      let currentAnchorIndex = 0;
      for (let i = 0; i < anchors.length; i++) {
        if (currentY + windowHeight * 0.4 >= anchors[i].y) currentAnchorIndex = i;
      }

      const currentAnchor = anchors[currentAnchorIndex];
      const nextAnchor = anchors[currentAnchorIndex + 1];

      // targetY in viewport coords
      let targetY = currentAnchor.y - currentY + windowHeight * 0.3;

      if (nextAnchor) {
        const denom = nextAnchor.y - currentAnchor.y || 1;
        const p = Math.min(
          1,
          Math.max(0, (currentY + windowHeight * 0.4 - currentAnchor.y) / denom)
        );
        targetY = currentAnchor.y + (nextAnchor.y - currentAnchor.y) * p - currentY + windowHeight * 0.2;
      }

      // targetX by side
      const margin = windowWidth > 1200 ? 120 : 80;
      const flowerSize = 120; // approx px footprint
      const targetX = currentAnchor.side === "left" ? margin : windowWidth - margin - flowerSize;

      xSpring.set(targetX);
      ySpring.set(Math.max(100, Math.min(windowHeight - 200, targetY)));

      // rotation by scroll velocity
      const velocity = scrollY.getVelocity();
      rotateSpring.set(Math.max(-4, Math.min(4, velocity * 0.002)));

      // scale by overall page progress
      const docH = document.documentElement.scrollHeight;
      const p = docH > windowHeight ? currentY / (docH - windowHeight) : 0;
      scaleSpring.set(0.6 + p * 0.4);
    });

    return () => unsubscribe();
  }, [anchors, windowHeight, windowWidth, scrollY, xSpring, ySpring, rotateSpring, scaleSpring]);

  /**
   * Now it's safe to conditionally render based on windowWidth,
   * because ALL hooks have already been called above.
   */
  const isMobile = windowWidth > 0 && windowWidth < 768;
  if (isMobile) return null;

  return (
    <motion.div
      ref={containerRef}
      className="fixed pointer-events-none z-30"
      style={{
        x: xSpring,
        y: ySpring,
        rotate: rotateSpring,
        scale: scaleSpring,
      }}
    >
      <div className="relative">
        {/* Main flower with bloom progression */}
        <motion.div className="relative w-28 h-28 md:w-36 md:h-36">
          {/* Bud */}
          <motion.img
            src={flowerStates.bud}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-full shadow-flower"
            style={{ opacity: budOpacity }}
          />

          {/* Half */}
          <motion.img
            src={flowerStates.halfBloom}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-full shadow-flower"
            style={{ opacity: halfOpacity }}
          />

          {/* Full */}
          <motion.img
            src={flowerStates.fullBloom}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-full shadow-flower"
            style={{ opacity: fullOpacity }}
          />
        </motion.div>

        {/* Soft glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10"
          style={{
            scale: glowScale,
            opacity: glowOpacity,
          }}
        />
      </div>
    </motion.div>
  );
}
