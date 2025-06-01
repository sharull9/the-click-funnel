import { motion } from "framer-motion";
import TextMaskAnimation from "./TextMaskAnimation";
import { Home, Heart, DollarSign, Globe, Calendar, Briefcase, Users, Gift, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import RotatingLabels from "./RotatingLabels.jsx";
import Button from "../Reusable/Button";
import SideVid from "../assets/sidevid.webm";

const labels = [
  { text: "E-Commerce", color: "#1E90FF", icon: <Home size={16} /> },
  { text: "Edu-Tech", color: "#FF6347", icon: <Heart size={16} /> },
  { text: "Health-Tech", color: "#32CD32", icon: <DollarSign size={16} /> },
  { text: "Fin-Tech", color: "#FFD700", icon: <Briefcase size={16} /> },
  { text: "Logistics", color: "#228B22", icon: <Truck size={16} /> },
  { text: "Travel & Tourism", color: "#FFD700", icon: <Globe size={16} /> },
  { text: "Sports Tech", color: "#FF4500", icon: <Calendar size={16} /> },
  { text: "Non-Profit", color: "#8A2BE2", icon: <Users size={16} /> },
  { text: "Food & Beverage", color: "#FF1493", icon: <Gift size={16} /> },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center bg-black overflow-hidden px-2">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>

      {/* Content */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col gap-4 text-white z-10 mt-auto pb-6">

        {/* Main Content - Now in two columns */}
        <div className="relative flex flex-col md:flex-row justify-between items-start w-full mt-auto gap-8">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col">
            <TextMaskAnimation />
            
            {/* Description moved below title */}
            <motion.p
              className="w-full max-w-lg text-gray-300 text-lg mt-6"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
            >
              Transforming ideas into impactful narratives. Resonating with your audience through storytelling, branding, and strategy.
            </motion.p>

                   {/* Rotating Labels */}
            <div className="mt-12">
              <RotatingLabels labels={labels} />
            </div>

            {/* Button added below description */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
<Button
  to="https://cal.com/theclickfunnel-company-lsgeoq"
  text="Get In Touch"
  className="w-full sm:w-fit bg-white text-black hover:bg-gray-200 hover:text-white transition-colors"
  icon={Users}
/>

            </motion.div>

    
          </div>

          {/* Right Side - Video */}
<motion.div 
  className="hidden md:flex w-full md:w-1/2 justify-end"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
  <div className="relative rounded-xl overflow-hidden border border-gray-700/50 w-full max-w-[600px] h-[450px]">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={SideVid} type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;