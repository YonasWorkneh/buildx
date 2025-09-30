import { scaleUp } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Highlight() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const home = useRef<HTMLVideoElement>(null);
  const serviceRef = useRef<HTMLVideoElement>(null);
  const img1InView = useInView(img1, { once: true, margin: "-150px 0px" });
  const img2InView = useInView(img2, { once: true, margin: "-150px 0px" });
  const img3InView = useInView(img3, { once: true, margin: "-150px 0px" });
  const img4InView = useInView(img4, { once: true, margin: "-150px 0px" });
  const vid1InView = useInView(img1, { margin: "-150px 0px" });
  const vid2InView = useInView(img2, { margin: "-150px 0px" });

  useEffect(
    function () {
      if (vid1InView && home.current) home.current.play();
      if (vid2InView && serviceRef.current) serviceRef.current.play();
    },
    [vid1InView, vid2InView]
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
          <video
            src="/video/home.mov"
            muted
            ref={home}
            className="border border-white/10 rounded-xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] mb-28 mt-20 object-cover"
          />
        </motion.div>

        <motion.div
          ref={img2}
          initial="initial"
          animate={img2InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <video
            src="/video/cur.mov"
            muted
            ref={serviceRef}
            className="border border-white/10 rounded-xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] mb-28 mt-20 object-cover"
          />
        </motion.div>
        <motion.div
          ref={img3}
          initial="initial"
          animate={img3InView ? "enter" : "initial"}
          variants={scaleUp()}
          className="flex justify-between items-center gap-10 border border-white/10 rounded-xl mt-20 p-6 sm:p-10 sm:px-16 overflow-scroll scrollbar-hide bg-[radial-gradient(circle_farthest-side_at_50%_0,#00000080,#0000)]"
        >
          <Image
            src={"/img/bcho.png"}
            alt="home-page"
            width={500}
            height={200}
            className={` w-[550px] h-[350px] md:w-[550px] md:h-[580px] ${
              img3InView ? "opacity-90" : "opacity-70"
            } -translate-y-8`}
          />
          <Image
            src={"/img/services.png"}
            alt="home-page"
            width={1000}
            height={200}
            className={` w-[550px] h-[350px] md:w-[550px] md:h-[580px] mt-14 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
          <Image
            src={"/img/menu.png"}
            alt="home-page"
            width={1000}
            height={200}
            className={`w-[550px] h-[350px] md:w-[550px] md:h-[580px] translate-y-16 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
        <motion.div
          ref={img4}
          initial="initial"
          animate={img4InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/blackcube/ethics.png"}
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
