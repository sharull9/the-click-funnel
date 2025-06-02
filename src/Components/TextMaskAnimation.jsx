import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const phrases = [
  {
    label: "Get the perfect pitch",
    img: "/assets/hero-slide-1.jpg",
    textcolor: "text-purple-400",
    bgcolor: "bg-gray-800",
  },
  {
    label: "Make every slide count",
    img: "/assets/hero-slide-2.jpg",
    textcolor: "text-yellow-400",
    bgcolor: "bg-indigo-800",
  },
  {
    label: "Presentations that win",
    img: "/assets/hero-slide-3.jpg",
    textcolor: "text-blue-400",
    bgcolor: "bg-orange-800",
  },
  {
    label: "Turn ideas into impact",
    img: "/assets/hero-slide-4.jpg",
    textcolor: "text-red-400",
    bgcolor: "bg-teal-800",
  },
];

export default function TextMaskAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= phrases.length - 1) return 0;
        return state + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const transition = { ease: "easeInOut", duration: 0.5 };

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 size-full flex items-center translate-x-0 justify-end z-0">
        <AnimatePresence mode="wait">
          <motion.div
            className={cn(
              "size-80 rounded-full flex items-center justify-center transition-colors",
              phrases[index].bgcolor
            )}
          >
            <motion.img
              src={phrases[index].img}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={transition}
              alt={phrases[index].label}
              className="size-56 object-cover rounded-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-10 flex items-center justify-center flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            className={cn(
              "cursor-pointer tracking-tight flex gap-1 text-5xl sm:text-4xl md:text-5xl lg:text-7xl leading-15 sm:leading-12 md:leading-15 lg:leading-22 font-bold",
              phrases[index].textcolor
            )}
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={transition}
          >
            <p>{phrases[index].label}</p>
          </motion.div>
        </AnimatePresence>
        <p className="cursor-pointer tracking-tight text-5xl sm:text-4xl md:text-5xl leading-15 sm:leading-12 md:leading-15 lg:leading-22 lg:text-7xl font-bold text-white">
          with TheClickFunnel
        </p>
      </div>
    </div>
  );
}
