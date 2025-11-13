import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * direction: 'left' | 'right' | 'up' (par défaut 'up')
 */
const RevealOnScroll = ({ children, className = "", delay = 0, direction = "up", ...props }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay } });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, delay]);

  let initial = { opacity: 0 };
  if (direction === "left") initial.x = -60;
  else if (direction === "right") initial.x = 60;
  else initial.y = 40;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
