import { scaleUp } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Highlight() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const img1InView = useInView(img1, { once: true, margin: "-150px 0px" });
  const img2InView = useInView(img2, { once: true, margin: "-150px 0px" });
  const img3InView = useInView(img3, { once: true, margin: "-150px 0px" });
  const img4InView = useInView(img4, { once: true, margin: "-150px 0px" });
  const img5InView = useInView(img5, { once: true, margin: "-150px 0px" });

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
            src={"/img/autod.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img1InView ? "opacity-90" : "opacity-70"
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
            src={"/img/about.png"}
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
            src={"/img/auction.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
        <motion.div
          ref={img5}
          initial="initial"
          animate={img5InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/modal.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>

        <motion.div
          ref={img4}
          initial="initial"
          animate={img4InView ? "enter" : "initial"}
          variants={scaleUp()}
          className="flex justify-between items-center gap-10 border border-white/10 rounded-xl mt-20 p-6 sm:p-10 sm:px-16 overflow-scroll scrollbar-hide bg-[radial-gradient(circle_farthest-side_at_50%_0,_#fff3,_#00000030)]"
        >
          <Image
            src={"/img/hom.png"}
            alt="home-page"
            width={500}
            height={200}
            className={` w-[550px] h-[350px] md:w-[550px] md:h-[500px] ${
              img3InView ? "opacity-90" : "opacity-70"
            } -translate-y-8`}
          />
          <Image
            src={"/img/sig.png"}
            alt="home-page"
            width={1000}
            height={200}
            className={` w-[550px] h-[350px] md:w-[550px] md:h-[500px] mt-14 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
          <Image
            src={"/img/auc.png"}
            alt="home-page"
            width={1000}
            height={200}
            className={`w-[550px] h-[350px] md:w-[550px] md:h-[500px] translate-y-16 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
}
