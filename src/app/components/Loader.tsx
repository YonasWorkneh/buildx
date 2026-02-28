import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <motion.p
        className="uppercase font-michroma tracking-[30px] text-xl ml-[20px] text-[#ffffff8a]"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        BuildX
      </motion.p>
    </div>
  );
}
