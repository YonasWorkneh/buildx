import { scaleUp } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Highlight() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const home = useRef<HTMLVideoElement>(null);
  const serviceRef = useRef<HTMLVideoElement>(null);
  const img1InView = useInView(img1, { once: true, margin: "-150px 0px" });
  const img2InView = useInView(img2, { once: true, margin: "-150px 0px" });
  const img3InView = useInView(img3, { once: true, margin: "-150px 0px" });

  useEffect(
    function () {
      if (img1InView && home.current) home.current.play();
      if (img2InView && serviceRef.current) serviceRef.current.play();
    },
    [img1InView, img2InView]
  );

  return (
    <div>
      <div className="text-center flex justify-center mb-1">
        <Image
          src={"/img/highlight-icon.svg"}
          alt="highlight icon svg"
          width={100}
          height={100}
          className="w-14 h-auto"
        />
      </div>
      <h2 className="before:h-4 font-tenor font-semibold text-xs text-[#ffffff83] px-20 relative text-center uppercase tracking-widest mt-7">
        Highlights
      </h2>
      <div className="mt-10">
        <motion.div
          ref={img1}
          initial="initial"
          animate={img1InView ? "enter" : "initial"}
          variants={scaleUp()}
          className="w-full"
        >
          <Image
            src={"/img/legendx.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>

        <motion.div
          ref={img2}
          initial="initial"
          animate={img2InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/equipments.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
        <motion.div
          ref={img3}
          initial="initial"
          animate={img3InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/users.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
}
