"use client";

// import styles from "./page.module.scss";
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const projects = [
  {
    src: "/img/auto.png",
    url: "https://autodealer-two.vercel.app/",
    platform: "Web App",
    framework: "Next JS",
    purpose: "Ecommerce",
  },
  {
    src: "/img/ethmarket.png",
    url: "https://eth-lilac.vercel.app/",
    platform: "Web App",
    framework: "Next JS",
  },
  {
    src: "/img/epicure.png",
    framework: "React Native",
    platform: "Mobile App",
    purpose: "Culinary exploration",
  },
  {
    src: "/img/legend.png",
    url: "https://legendx.vercel.app/",
    framework: "React",
    platform: "Web app",
    purpose: "SaaS",
  },
  {
    src: "/img/aromax.png",
    url: "https://aromaxtrading.com/",
    framework: "Next JS",
    platform: "Web App",
    purpose: "SaaS",
    gradient: "rgba(0,0,0,0.3),rgba(0,0,0,0.4)",
  },
  {
    src: "/img/kandake.png",
    url: "/img/kandake.png",
    framework: "Word Press",
    platform: "Web App",
    purpose: "Company site",
    gradient: "rgba(0,0,0,0.3),rgba(0,0,0,0.4)",
  },
  {
    src: "/img/sunshine.png",
    url: "https://gta-vi-iota.vercel.app/",
    framework: "React Native",
    platform: "Mobile App",
    purpose: "Compound Managment",
  },
  {
    src: "/img/gebeya.png",
    framework: "React",
    platform: "Web App",
    purpose: "Ecommerce",
    gradient: "rgba(0,0,0,0.3),rgba(0,0,0,0.4)",
  },
  {
    src: "/img/yig.png",
    url: "https://yig1.plutotechnologies.org/",
    framework: "Word Press",
    platform: "Web App",
    purpose: "Company Site",
    gradient: "rgba(0,0,0,0.3),rgba(0,0,0,0.4)",
  },
  {
    src: "/img/gtaa.png",
    url: "https://gta-vi-iota.vercel.app/",
    framework: "React",
    platform: "Web App",
    purpose: "DIY",
  },
];

interface StackedCardsProps {
  scrollContainerId: string;
}

export default function StackedCards({ scrollContainerId }: StackedCardsProps) {
  const container = useRef(null);
  const scrollContainer = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Get the scroll container element
    scrollContainer.current = document.getElementById(scrollContainerId);
  }, [scrollContainerId]);
  return (
    <main ref={container} className="">
      <h2 className="text-center text-2xl my-20 font-michroma">
        {" "}
        15+ Projects
      </h2>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
