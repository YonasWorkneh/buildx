import { borderAndContentReveal, contentReveal } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Solution() {
  const solutionCard = useRef(null);
  const solutionGrid = useRef(null);
  const solutionCardInView = useInView(solutionCard, { once: true });
  const solutionGridInView = useInView(solutionGrid, { once: true });
  return (
    <div>
      <div>
        <h1 className="relative pl-8 uppercase text-md text-[#ffffff54] font-tenor font-semibold before:content-[''] before:absolute before:top-[3px] before:left-0 before:inline-block before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:shadow-[0px_0px_10px_#fff]">
          The Solution
        </h1>
      </div>
      <div className="flex justify-center">
        <motion.div
          ref={solutionCard}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={
            solutionCardInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl rounded-3xl py-6 px-2 sm:p-8 md:p-12 overflow-hidden 
                    border border-transparent
                    bg-[#1a1a1a]
                    before:content-[''] before:absolute before:top-0 before:left-[30%] before:right-[30%] before:h-[2px]
                    before:bg-gradient-to-r before:from-transparent before:via-[#0a3e1a] before:to-transparent
                    before:shadow-[0_0_10px_1px_rgba(10, 62, 26, 0.88)] mt-10"
        >
          {/* Circular background gradient */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0, #63e6e20d, #0000 60%)",
              backgroundColor: "#f2f2f20a",
            }}
          ></div>

          {/* Glow effect overlay */}
          <div className="absolute top-0 left-[30%] right-[30%] h-[3px] blur-[2px] bg-gradient-to-r from-transparent via-[#0a3e1a] to-transparent opacity-60"></div>

          {/* Content */}
          <div className="relative text-center space-y-4 md:space-y-6">
            <h2 className="text-gray-400 text-xs sm:text-sm md:text-base tracking-widest uppercase font-tenor">
              KEY DISCOVERY
            </h2>
            <p className="text-white text-[14px] sm:text-xl md:text-2xl font-medium leading-tight md:leading-10 font-tenor">
              It was not just about establishing a commanding digital presence,
              but also creating a modern and simplistic design.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="relative">
        <motion.div
          ref={solutionGrid}
          initial={"initial"}
          animate={solutionGridInView ? "enter" : "initial"}
          variants={borderAndContentReveal}
          className="absolute top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff6d] to-transparent" // Added gradient for softer edges
        />
        <motion.div
          initial="initial"
          animate={solutionGridInView ? "enter" : "initial"}
          variants={contentReveal}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-14 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={
              solutionGridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <p
              className="text-[20px] md:text-[25px] mb-6 md:mb-0"
              style={{ textShadow: "0px 0px 10px #ffffff39" }}
            >
              Interaction &mdash; simplicity is everything
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={
              solutionGridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <p className="text-white/50 font-tenor">
              While the primary objective was to deliver a secure and modern
              digital marketplace quickly, We noticed a significant gap in
              existing platforms within the automotive sector. Many lack
              engaging interactivity and, more importantly, the polished design
              that draws buyers and sellers in—encouraging exploration rather
              than just serving basic functionality. <br />
              <br />
              <span className="hidden sm:block">
                But design alone isn’t enough. A truly effective dealership and
                auction platform must balance visual appeal with trust,
                reliability, and performance. For this project, that meant
                ensuring the spotlight remained on the cars, listings, and
                transactions, rather than flashy visuals. The goal was not just
                to create a sleek website, but to craft a platform that
                seamlessly blends beauty with purpose—building confidence,
                streamlining navigation, and making the car-buying journey both
                exciting and effortless.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
