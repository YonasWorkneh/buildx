"use client";
import {
  ArrowLeft,
  ArrowRight,
  Grid,
  Lock,
  MoreVertical,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

// import Carousal from "./Card";
import Link from "next/link";
import Trex from "./Trex";
import Tabs from "./Tabs";
import StackedCards from "./StackedCards";
// import Image from "next/image";

export default function Projects() {
  const [url, setUrl] = useState("yonasw.dev");
  const [hideTabContent, setHideTabContent] = useState(false);

  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (tab !== 0) {
      setHideTabContent(true);
      setUrl("");
    } else {
      setHideTabContent(false);
      setUrl("yonasw.dev");
    }
  }, [tab]);

  return (
    <div className="w-full h-full bg-[#2D2D2D] rounded-xl overflow-hidden shadow-2xl border border-[#ffffff41]">
      {/* Mac Chrome Window Header */}
      <div className="bg-[#111] flex flex-col">
        {/* Traffic lights and tabs row */}
        <div className="flex items-center gap-2 p-2 py-0">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] cursor-pointer" />
          </div>

          {/* Tabs */}
          <Tabs onSetTab={setTab} tab={tab} />
        </div>

        {/* URL bar row */}
        <div
          className={`flex items-center gap-2 bg-[#323233] p-2 ${
            hideTabContent ? "border-b border-b-white/10" : ""
          } `}
        >
          {/* Navigation Controls */}
          <div className="flex items-center gap-2 text-[#8E8E8E]">
            <ArrowLeft className="w-4 h-4 cursor-pointer" />
            <ArrowRight className="w-4 h-4 cursor-pointer" />
            <RefreshCw className="w-4 h-4 cursor-pointer" />
          </div>

          {/* Address Bar */}
          <div className="flex-1 mx-4">
            <div className=" relative bg-[#292929] rounded-3xl px-3 py-2 flex items-center gap-2 border border-white/40">
              <Lock className="w-4 h-4 text-[#8E8E8E]" />
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  console.log(url);
                  if (e.target.value === "yonasw.dev") {
                    setHideTabContent(false);
                  }
                }}
                className="w-full h-full bg-transparent text-[#8E8E8E] absolute top-0 left-0 z-10 rounded-3xl px-10 focus:outline-none"
              />
            </div>
          </div>

          {/* Window Controls */}
          <div className="flex items-center gap-3 text-[#8E8E8E]">
            <Grid className="w-4 h-4" />
            <MoreVertical className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>
      {hideTabContent ? (
        <Trex key={tab} />
      ) : (
        <div
          className={`bg-[#1C1C1C] h-full w-full relative overflow-y-scroll`}
          id="projects-scroll-container"
        >
          <header className="flex justify-between items-center p-8 w-full top-0 z-50 sticky bg-transparent">
            <div>
              <h1 className="font-medium text-white/60 font-michroma text-xs">
                Yonas Workneh
              </h1>
              <p className="text-gray-400 font-michroma text-xs">
                Software Engineer
              </p>
            </div>

            <nav className="flex gap-1 bg-[#2c2c2c7f] rounded-full p-[4px] backdrop-blur-lg border-1 border-[#ffffff0f] hover:bg-[#3a3a3a7f] font-michroma">
              <button className="p-2 text-[10px] rounded-full hover:bg-[#3C3C3C] transition-colors bg-[#3C3C3C] before:content-[''] before:h-[2px] before:w-4 before:bg-white before:shadow-white before:absolute before:-top-0 before:left-[28px]">
                Projects
              </button>
              <button className="p-2 rounded-full hover:bg-[#3C3C3C] transition-colors text-[10px] ">
                About
              </button>
            </nav>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 font-michroma text-xs">
                <button
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors text-[10px] text-white/60"
                  onClick={() =>
                    window.open("www.linkedin.com/in/yonas-workneh", "_blank")
                  }
                >
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors text-[10px] text-white/60"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/12dHWKdHYz0wUt3TvNfPUeEKmP06icN2h/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  Resume
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>
          <div className="relative p-3 border-t-[0px] h-[100px] mt-[-110px] mx-[200px] border-[1px] border-[#ffffff76] rounded-b-3xl bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f211] to-[#f2f2f21a] mb-5">
            <Link href={"#"} className="group">
              <div className="relative rounded-b-3xl overflow-hidden flex items-center justify-center  bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] group-hover:!bg-[radial-gradient(#ffbd5916,#ffbd5a1b,#00000077)] border-[1px]  border-[#ffffff76] border-t-0 h-full p-14 lg:px-[2rem] pt-0 pb-1 transition-all">
                <div
                  className="h-[100px] mx-10 w-full lg:mx-0"
                  style={{
                    background: "url('/img/auto-b.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </Link>
          </div>
          <div className="h-full px-16">
            <StackedCards scrollContainerId="projects-scroll-container" />
            <div className="h-[50vh]" />
          </div>
        </div>
      )}
    </div>
  );
}
