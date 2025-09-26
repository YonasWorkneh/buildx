"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

// components

import Curve from "@/app/components/Curve";
import { fadeIn } from "@/app/utils/anim";
import Frame from "../components/Frame";
import Header from "./Header";
import Banner from "./Banner";
import Overview from "./Overview";
import Highlight from "./Highlight";
import Problem from "./Problem";
import Solution from "./Solution";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const [active, setActive] = useState(""); // existing state

  // sections
  const frame = useRef(null);
  const overview = useRef<HTMLElement>(null);
  const highlights = useRef(null);
  const problem = useRef(null);
  const solution = useRef(null);
  const serviceRef = useRef<HTMLVideoElement>(null);
  const overviewAnim = useRef<HTMLElement>(null);

  // observer for elements
  const frameInView = useInView(frame, {});
  const overviewInView = useInView(overview, { margin: "-200px 0px" });
  const overviewAnimInView = useInView(overviewAnim, {
    margin: "-200px 0px",
    once: true,
  });
  const highlightsInView = useInView(highlights, {});
  const problemInView = useInView(problem, { margin: "-300px 0px" });
  const solutionInView = useInView(solution, {});
  const servicesInView = useInView(serviceRef, {});

  useEffect(() => {
    if (frameInView) setActive("");
    if (overviewInView) setActive("overview");
    if (highlightsInView) setActive("highlights");
    if (problemInView) setActive("problem");
    if (solutionInView) setActive("solution");
    if (servicesInView && serviceRef.current) serviceRef.current.play();
  }, [
    frameInView,
    overviewInView,
    highlightsInView,
    problemInView,
    solutionInView,
    serviceRef,
    servicesInView,
  ]);

  return (
    <Curve>
      <div className="min-h-[100vh] relative">
        <div className="relative">
          <section
            className={`pt-8 sm:pt-12 md:pt-16 min-h-[100vh] bg-[radial-gradient(circle_farthest-side_at_50%_0,#00639b80,#0000)] relative`}
            ref={frame}
          >
            <div className="max-w-[1440px] mx-auto">
              <Header active={active} />
              <Frame>
                <Banner />
              </Frame>
            </div>
            {/* noise */}
            <div className="bg-[url('/img/noise.png')] absolute top-0 left-0 h-full w-full opacity-20" />
          </section>
          {/* mx-auto 1440px */}
          <div className="max-w-[1440px] mx-auto p-2 sm:p-4 md:p-6 lg:p-8">
            {/* overview */}
            <motion.section
              id="overview"
              className="py-10 rounded-3xl my-28 px-4"
              ref={(el) => {
                overview.current = el;
                overviewAnim.current = el;
              }}
              initial="initial"
              animate={overviewAnimInView ? "enter" : "initial"}
              variants={fadeIn}
            >
              <Overview />
            </motion.section>

            <section
              id="highlights"
              className="py-10 px-4 sm:px-8 md:px-20 lg:px-40 min-h-dvh rounded-[25px] border border-white/10 relative"
              style={{
                backgroundImage:
                  "radial-gradient(circle closest-corner at 50% 0, #64d2ff0d, #0000)",
                backgroundColor: "#15141418",
              }}
              ref={highlights}
            >
              <Highlight />
              <div className="inset-0 bg-[linear-gradient(to_right,_#0000_15%,_#64d2ff80_50%,_#000_95%)] h-[1px] absolute mx-10 " />
            </section>
            <section
              id="problem"
              className="py-10 rounded-3xl my-28 px-4"
              ref={problem}
            >
              <Problem />
            </section>
            <section
              id="solution"
              className="rounded-3xl  my-16 sm:my-28 px-4"
              ref={solution}
            >
              <Solution />
            </section>
            <Link
              href={"https://eth-lilac.vercel.app"}
              target="_blank"
              // onClick={(e) => handleScroll(e, "solution")}
              className="border border-white/60 hover:border-white size-[70px] rounded-full flex flex-col text-[12px] items-center justify-center fixed bottom-24 right-5 sm:right-8 md:right-10 lg:right-14 shadow-[0px_0px_5px_#ffffff3a]"
            >
              <ArrowUpRight size={15} className="animate-bounce" />
              Explore
            </Link>
          </div>
        </div>
      </div>
    </Curve>
  );
}
