import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const phrases = [
  "Professional designs",
  "for impactful presentations",
  "that connect.",
];

export default function TextMaskAnimation() {
  const bodyRef = useRef(null);
  const isInView = useInView(bodyRef, { once: true, margin: "0%" });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  return (
    <div ref={bodyRef} className="overflow-hidden">
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            className="text-5xl sm:text-4xl md:text-5xl font-bold max-w-4xl leading-none text-left sm:text-left md:text-left text-white"
            custom={index}
            variants={animation}
            initial="initial"
            animate={hasAnimated ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
