import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import anim, { fadeInUp } from "@/app/utils/anim";

export default function Banner() {
  return (
    <div className="h-full w-full flex items-center justify-center py-2 sm:py-4 px-2 sm:px-4">
      <div className="relative sm:w-full max-w-[800px]">
        <motion.div {...anim(fadeInUp(1.5, 0.8))}>
          <Image
            src={"/img/autod.png"}
            alt="home"
            className="border border-white/10 rounded-lg w-full hidden sm:block"
            width={800}
            height={1000}
            priority
          />
        </motion.div>
        <motion.div
          {...anim(fadeInUp(1.75, 0.8))}
          className="sm:absolute sm:top-[65%] sm:left-[-130px] md:top-[120px] sm:right-0 md:right-[-100px] h-auto sm:w-[220px] md:w-[280px] lg:w-[280px] sm:h-[400px]  p-2 sm:p-6 md:p-6  "
        >
          <Image
            src={"/img/auto-m.png"}
            alt="eth-mobile ui"
            width={100}
            height={100}
            className="h-[520px] w-[280px] sm:h-[450px]"
          />
        </motion.div>
        <motion.div
          {...anim(fadeInUp(1.75, 0.8))}
          className="border border-white/10 rounded-md absolute top-[65%] right-[-5px] sm:top-[30%] md:top-[300px] sm:right-0 md:right-[-100px] 
                      w-[180px] sm:w-[220px] md:w-[280px] lg:w-[280px] 
                      h-auto 
                      p-2 sm:p-6 md:p-6 
                      bg-[radial-gradient(#000,#000000c6)]"
        >
          <div className="flex gap-2 items-center">
            <Image
              src={"/img/blackcube/interactive.png"}
              alt="interactive-design"
              width={40}
              height={40}
              className="size-[25px] sm:size-[30px] md:size-[35px]"
            />
            <span
              className="font-tenor tracking-wider text-white/60 text-[10px] sm:text-xs md:text-sm"
              style={{ textShadow: " 0px 0px 10px #ffffff6e" }}
            >
              Interactive Design
            </span>
          </div>
          <p className="text-white/40 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2">
            Modern interactive design with NextJS.
          </p>
          <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
            <svg
              height="40"
              viewBox=".5 -.2 1023 1024.1"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"></path>
              <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"></path>
            </svg>
            <Image
              src={"/img/shadcn.png"}
              alt="interactive-design"
              className="size-[35px] sm:size-[30px] md:size-[40px] rounded-2xl object-cover object-center"
              width={160}
              height={60}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
