import { fadeInUp } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import { Clock, Languages, MonitorSmartphone } from "lucide-react";
import React, { useRef } from "react";

export default function Problem() {
  const cst1 = useRef(null);
  const cst2 = useRef(null);
  const cst3 = useRef(null);
  const probStmt = useRef(null);
  const probStmtInView = useInView(probStmt, {
    once: true,
    margin: "-100px 0px",
  });
  const cst1InView = useInView(cst1, { once: true });
  const cst2InView = useInView(cst2, { once: true });
  const cst3InView = useInView(cst3, { once: true });
  return (
    <div>
      <h1 className="relative pl-8 uppercase text-md text-[#ffffff54] font-tenor font-semibold before:content-[''] before:absolute before:top-[3px] before:left-0 before:inline-block before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:shadow-[0px_0px_10px_#fff]">
        The problem
      </h1>
      <motion.p
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        ref={probStmt}
        animate={probStmtInView ? "enter" : "initial"}
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          enter: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        className="text-[20px] mt-10 sm:text-[40px]"
        style={{ textShadow: "0px 0px 10px #ffffff64" }}
      >
        Bringing secure, digital marketplaces where they’re needed most.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 sm:mt-20">
        <p
          className="text-[20px] md:text-[25px]"
          style={{ textShadow: "0px 0px 10px #ffffff39" }}
        >
          A pile of constraints
        </p>
        <div>
          <p className="text-white/50 font-tenor">
            In many emerging markets, buyers and sellers struggle with limited
            access to reliable ecommerce platforms. Existing solutions are often
            fragmented, insecure, or not tailored to local needs, making online
            trade difficult to scale. <br />
            <br />
            <span className="hidden sm:inline">
              888Market aims to transform digital commerce with a modern,
              all-in-one marketplace that offers secure payments, verified
              listings, and a seamless user experience. The goal is to empower
              communities with trusted, scalable, and accessible tools to
              simplify trade, boost participation, and drive growth.
            </span>
          </p>
          <div className="mt-10">
            <motion.div
              ref={cst1}
              initial="initial"
              animate={cst1InView ? "enter" : "initial"}
              variants={fadeInUp(0.1)}
              className="flex gap-[2rem] bg-[linear-gradient(#fb8b8b12,transparent)] px-2 sm:px-5 py-10 rounded-xl shadow-[0px_0px_10px_#ff55550d] border border-[#ffffff0f] mb-4"
            >
              <Clock
                color="rgba(241, 80, 80, 0.779)"
                className="size-[60px] sm:size-[25px]"
              />
              <p className="text-white/60 text-sm sm:text-base">
                With less than five months to deliver, building such a
                large-scale ecommerce platform was the most demanding challenge
                yet..
              </p>
            </motion.div>
            <motion.div
              ref={cst2}
              initial="initial"
              animate={cst2InView ? "enter" : "initial"}
              variants={fadeInUp(0.3)}
              className="flex gap-[2rem] bg-[linear-gradient(#fb8b8b12,transparent)] px-2 sm:px-5 py-10 rounded-xl shadow-[0px_0px_10px_#ff55550d] border border-[#ffffff0f] mb-4"
            >
              <MonitorSmartphone
                color="rgba(241, 80, 80, 0.779)"
                className="size-[60px] sm:size-[40px]"
                size={25}
              />
              <p className="text-white/60 text-sm sm:text-base">
                Making 888Market fully responsive was a key challenge. Balancing
                design with performance across devices required constant
                refinement.
              </p>
            </motion.div>
            <motion.div
              ref={cst3}
              initial="initial"
              animate={cst3InView ? "enter" : "initial"}
              variants={fadeInUp(0.5)}
              className="flex gap-[2rem] bg-[linear-gradient(#fb8b8b12,transparent)] px-2 sm:px-5 py-10 rounded-xl shadow-[0px_0px_10px_#ff55550d] border border-[#ffffff0f] mb-4"
            >
              <Languages
                color="rgba(241, 80, 80, 0.779)"
                className="size-[60px] sm:size-[40px]"
                size={25}
              />

              {/* <Clock color="rgba(241, 80, 80, 0.779)" /> */}
              <p className="text-white/60 text-sm sm:text-base">
                Integrating Arabic support was a major challenge. Handling RTL
                layouts and maintaining design consistency required careful
                adjustments.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
