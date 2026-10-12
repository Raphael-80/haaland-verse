import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        {/* Number 9 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-[180px] md:text-[250px] font-black text-white leading-none"
        >
          9
        </motion.h1>

        {/* Player Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 2.8,
          }}
          className="text-xl md:text-3xl tracking-[0.5em] text-gray-300 uppercase"
        >
          Erling Haaland
        </motion.h2>

        {/* Brand */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 2.8,
          }}
          className="mt-6 text-sm md:text-lg tracking-[0.8em] text-white font-semibold"
        >
          HAALANDVERSE
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;