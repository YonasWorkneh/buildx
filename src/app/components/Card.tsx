"use client";

// import styles from "./style.module.css";
import { motion, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface CardProps {
  src: string;
  url?: string;
  i: number;
  progress: MotionValue<number>;
  targetScale: number;
  range: number[];
  framework?: string;
  platform?: string;
  gradient?: string;
  purpose?: string;
}

const Card = ({
  src,
  url,
  i,
  progress,
  targetScale,
  range,
  platform,
  framework,
  purpose,
  gradient,
}: CardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  const badgeClass = `border border-white rounded-[20px] px-5 py-1 capitalize shadow-[0px_0px_10px_#ffffff69]`;
  return (
    <div
      ref={container}
      className="h-[50vh] flex items-center justify-center sticky top-0 z-[1]"
    >
      <motion.div
        className={
          "relative flex flex-col h-[650px] w-[1000px] rounded-lg p-14 orgin-top shadow-[0_10px_30px_rgba(0, 0, 0, 0.3)]"
        }
        style={{
          background: !gradient
            ? `url(${src})`
            : `linear-gradient(${gradient}), url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="flex gap-8 w-full mt-[-30px] ml-5 justify-end">
          {purpose && <p className={badgeClass}>{purpose}</p>}
          <p className={badgeClass}>{platform}</p>
          <p className={badgeClass}>{framework}</p>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            className={
              "size-[30px] rounded-full border border-white/40 hover:border-white grid place-items-center"
            }
          >
            <ArrowUpRight size={20} className="animate-bounce" />
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default Card;
