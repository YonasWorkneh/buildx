"use client";

import { useRef, useState } from "react";
import BoardSvg from "./BoardSvg";
import { motion } from "framer-motion";
import DevOps from "./svg/DevOps";
import NodeJs from "./svg/NodeJs";
import NextJs from "./svg/NextJs";
import ReactJs from "./svg/ReactJs";

export default function TechStack() {
  const [activeSkill, setActiveSkill] = useState(0);
  const skills = useRef<HTMLDivElement>(null);
  const buttons = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const scrollToSkill = (skill: number) => {
    if (skills.current) {
      const sectionWidth = skills.current.clientWidth;
      const newScroll = skill * sectionWidth;

      skills.current.scrollTo({
        left: skill === 2 ? newScroll + 50 : newScroll,
        behavior: "smooth",
      });
      if (buttons.current) {
        buttons.current.style.left = `${newScroll + 140}px`;
      }
      setActiveSkill(skill);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;
    const swipeThreshold = 50; // Minimum distance for a swipe

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0 && activeSkill < 2) {
        // Swipe left: move to next skill
        scrollToSkill(activeSkill + 1);
      } else if (deltaX < 0 && activeSkill > 0) {
        // Swipe right: move to previous skill
        scrollToSkill(activeSkill - 1);
      }
    }

    touchStartX.current = null; // Reset touch start position
  };

  return (
    <div className="flex items-center w-full justify-center relative bg-[radial-gradient(circle,rgba(255, 255, 255, 0.794)_0%,rgba(0,0,0,0)_60%)] mt-2 sm:mt-5 lg:mt-[1.5rem] 2xl:mt:14">
      <BoardSvg />
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, transparent 0%, rgba(74, 158, 255, 0.312) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(74, 255, 74, 0.25) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(255, 204, 0, 0.288) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(74, 158, 255, 0.421) 50%, transparent 100%)",
          ],
        }}
        transition={{
          background: {
            duration: 8,
            times: [0, 0.33, 0.66, 1],
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute bg-[#111] rounded-lg px-[1rem] py-[1rem] top-[100px] shadow-[0px_0px_100px_#ffffff18] z-30 border border-white/10"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <span
          className="bg-[linear-gradient(92.66deg,_#919191,_#eaeaea_19.79%,_#828181_33.33%,_#c6c6c6_70.31%,_#606060);] text-xl sm:text-2xl font-bold"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Full Stack Development
        </span>
        {/* top-pins */}
        <div>
          <div className="absolute top-[-10px] left-[66px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[90px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[114px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[138px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[162px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[186px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[210px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
        {/* bottom-pins */}
        <div>
          <div className="absolute bottom-[-10px] left-[66px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[90px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[114px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[138px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[162px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[186px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[210px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
        {/* left-pins */}
        <div>
          <div className="absolute top-[27px] left-[-10px] px-[5px] py-[3px] rounded-l-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[47px] left-[-10px] px-[5px] py-[3px] rounded-l-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
        {/* right-pins */}
        <div>
          <div className="absolute top-[27px] right-[-10px] px-[5px] py-[3px] rounded-r-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[47px] right-[-10px] px-[5px] py-[3px] rounded-r-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
      </motion.div>
      <div
        className="flex justify-between absolute w-[320px] sm:w-full gap-8 top-[220px] sm:top-[260px] overflow-x-hidden overflow-y-hidden h-[380px]"
        ref={skills}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* frontend development */}
        <div className="p-2 bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff1d] w-[300px] sm:w-full h-[300px] rounded-lg relative before:content-[''] before:inline-block before:h-[1px] before:absolute before:top-[-1px] before:right-[5.5rem] before:w-20 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),_rgb(0,_216,_255),_rgb(0,_135,_255),rgba(0,0,0,0.1))]">
          <div className="bg-[linear-gradient(rgb(36,_36,_36),_rgb(18_18_18_/_14%)_65.62%)] h-full w-[300px] sm:w-full rounded-lg shadow-[0px_0px_10px_#ffffff24]">
            <div className="px-6 py-4 flex gap-4 items-center">
              <ReactJs />
              <NextJs />
            </div>
            <article className="p-4 py-[45px]">
              <p className="text-xl font-bold mb-2 text-[rgb(105,178,241)]">
                Frontend Development
              </p>
              <p className="text-white/50 text-sm">
                Specializing in React and Next.js, building responsive and
                performant user interfaces with modern tools like Tailwind CSS
                and TypeScript. and React Native for mobile app development.
              </p>
            </article>
          </div>
        </div>
        {/* backend development */}
        <div className="p-2 bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff1d] w-[300px] sm:w-full h-[300px] rounded-lg relative before:content-[''] before:inline-block before:h-[1px] before:absolute before:top-[-1px] before:left-[9.4rem] before:w-20 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),_rgb(53,160,54),_rgb(37,111,38),rgba(0,0,0,0.1))]">
          <div className="bg-[linear-gradient(rgb(36,_36,_36),_rgb(18_18_18_/_14%)_65.62%)] h-full w-[300px] sm:w-full rounded-lg relative shadow-[0px_0px_10px_#ffffff24]">
            <div className="absolute top-[-15px] left-4">
              <NodeJs />
            </div>
            <article className="p-4">
              <p className="text-[rgb(55,156,57)] text-xl font-bold mb-2 mt-[100px]">
                Backend Development
              </p>
              <p className="text-white/50 text-sm">
                Creating robust server-side applications using Node.js, Express,
                and PostgreSQL. Experienced in RESTful APIs.
              </p>
            </article>
          </div>
        </div>
        {/* devops */}
        <div className="p-2 bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff1d] w-[300px] sm:w-full h-[300px] rounded-lg relative before:content-[''] before:inline-block before:h-[1px] before:absolute before:top-[-1px] before:left-[5rem] before:w-28 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),_#ffbc31,_#ff9e00,rgba(0,0,0,0.1))]">
          <div className="bg-[linear-gradient(rgb(36,_36,_36),_rgb(18_18_18_/_14%)_65.62%)] h-full w-[300px] sm:w-full rounded-lg">
            <div className="px-4">
              <DevOps />
            </div>
            <article className="p-4">
              <p className="text-[#ffbc31] text-xl font-bold mb-2">DevOps</p>
              <p className="text-white/50 text-sm">
                Automating infrastructure with Docker. Implementing CI/CD
                workflows for efficient deployments.
              </p>
            </article>
          </div>
        </div>
        <div
          className={`flex gap-2 sm:hidden absolute w-full bottom-[20px] left-[140px]`}
          ref={buttons}
        >
          <button
            type="button"
            className={`w-2 h-2 rounded-full bg-white/20 ${
              activeSkill === 0
                ? "!bg-[#00d8ff] shadow-[0px_0px_20px_#00d8ff] scale-150"
                : ""
            }`}
            onClick={() => scrollToSkill(0)}
          ></button>
          <button
            type="button"
            className={`w-2 h-2 rounded-full bg-white/20 ${
              activeSkill === 1
                ? "!bg-[rgb(55,156,57)] shadow-[0px_0px_20px_rgb(55,156,57)] scale-150"
                : ""
            }`}
            onClick={() => scrollToSkill(1)}
          ></button>
          <button
            type="button"
            className={`w-2 h-2 rounded-full bg-white/20 ${
              activeSkill === 2
                ? "!bg-[#ffbc31] shadow-[0px_0px_20px_#ffbc31] scale-150"
                : ""
            }`}
            onClick={() => scrollToSkill(2)}
          ></button>
        </div>
      </div>
    </div>
  );
}
