"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Curve from "../components/Curve";
import PhotoFrame from "../components/PhotoFrame";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return { ref, isInView };
  };

  const fadeIn = (isInView: boolean, delay: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.5, ease: "easeOut", delay },
  });

  const section1 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();
  const section5 = useScrollAnimation();
  const section6 = useScrollAnimation();
  const section7 = useScrollAnimation();
  const section8 = useScrollAnimation();
  const section9 = useScrollAnimation();
  const section10 = useScrollAnimation();
  const experienceTitle = useScrollAnimation();
  const experience1 = useScrollAnimation();
  const experience2 = useScrollAnimation();
  const experience3 = useScrollAnimation();
  const signature = useScrollAnimation();

  return (
    <Curve>
      <main className="px-4 sph:px-10 lg:px-0 lg:max-w-[1000px] 2xl:max-w-[1350px] mx-auto pt-32 lg:pt-36 2xl:pt-48 bg-[radial-gradient(circle_closest-corner_at_50%_0,#36363625,#0000)]">
        <motion.h1 className="pt-[2px] uppercase text-xs lg:text-sm 2xl:text-sm text-[#ffffff6a] before:contents-[''] before:inline-block before:size-[8px] lg:before:size-[11px] before:rounded-full tracking-widest before:bg-[#fff] before:shadow-[0px_0px_10px_#fff] relative before:absolute before:top-[0] before:translate-y-1/2 before:left-0 pl-5 lg:pl-7">
          About me
        </motion.h1>
        <motion.h2
          ref={section1.ref}
          {...fadeIn(section1.isInView, 1.1)}
          className="sm:text-4xl sm:leading-[normal] lg:text-[40px] 2xl:text-[55px] tracking-wider font-semibold leading-tight mt-5 lg:mt-10 bg-[linear-gradient(92.66deg,_#c4c3c3,_#eaeaea_19.79%,_#a2a1a1_33.33%,_#c6c6c6_70.31%,_#606060);] py-3"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 20px #ffffff39",
          }}
        >
          I&apos;m passionate about crafting visually stunning, memorable
          digital experiences.
        </motion.h2>
        <div className="block lmd:grid lmd:grid-cols-2 my-10 lg:my-28">
          <motion.div
            {...fadeIn(section1.isInView, 1.2)}
            className="h-[450px] lmd:w-[350px] lg:h-[600px] lg:w-[400px] 2xl:h-[800px] 2xl:w-[600px]"
          >
            <PhotoFrame img="db.jpg" />
          </motion.div>
          <motion.div {...fadeIn(section1.isInView, 1.3)} className="mt-16">
            <p className="text-[15px] lg:text-[16px] 2xl:text-[20px]">
              This is me &mdash; alongside some flicks from recent moments,
              captured with heart and a hint of story.
            </p>
            <motion.div
              {...fadeIn(section1.isInView, 1.4)}
              className="lmd:w-[350px] h-[450px] lg:h-[600px] lg:w-[400px] 2xl:h-[880px] 2xl:w-[600px]  pt-20"
            >
              <PhotoFrame img="profile.jpg" />
            </motion.div>
          </motion.div>
          <motion.div
            ref={section3.ref}
            {...fadeIn(section3.isInView, 0.4)}
            style={{ gridColumn: "1/3" }}
          >
            <div className="lmd:w-[350px] px-4 mt-20 lg:mt:0 lg:-mt-12 lg:w-[400px] 2xl:w-[600px]">
              <h3 className="lg:text-[18px] 2xl:text-xl font-semibold">
                My background in Software development
              </h3>
              <p className="mt-5 text-[#ffffff81] text-[14px] 2xl:text-[18px]">
                I started coding during the COVID lockdown, just looking for
                something to do. What began as an escape from boredom quickly
                turned into a passion before I even knew it. Each line of code
                pulled me deeper into the world of problem-solving. That spark
                led me to study Software Engineering at Addis Ababa Science &
                Technology University — and I’ve been building ever since.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={section4.ref}
            {...fadeIn(section4.isInView, 0.4)}
            className="mt-10"
          >
            <div className="h-[450px] lmd:w-[350px] lg:w-[400px] lg:h-[600px] 2xl:w-[600px] 2xl:h-[880px] mt-20 ">
              <PhotoFrame img="hackathon.jpg" />
            </div>
          </motion.div>
          <motion.div
            ref={section5.ref}
            {...fadeIn(section5.isInView, 0.4)}
            className="mt-20 lg:mt-48 lmd:w-[350px] lg:w-[400px] 2xl:w-[600px]"
          >
            <h3 className="lg:text-[18px] 2xl:text-xl font-semibold">
              Building Beyond Limits
            </h3>
            <p className="mt-5 text-[#ffffff81] mb-10 text-[14px] 2xl:text-[18px]">
              Hackathons have been more than competitions — Each challenge
              sharpened my skills, fueled my passion, and reminded me why I love
              building solutions that matter. <br /> <br /> Inclufi, a
              decentralized peer-to-peer lending platform powered by the XRP
              Ledger (XRPL), got me and my team this award at the 2024 Gresfet
              hackathon organized by Organization for Southern Cooperation
              bringing together countries from all across global south.
            </p>
            <Link
              href="https://www.linkedin.com/posts/yonas-workneh_gresfet-inclufi-osc-activity-7270213017693257730-jaK2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ-dbIBdOxFXFiW90WPW6qNL_ekKCKolmU"
              target="_blank"
              className="bg-[#000] p-2 rounded-full px-5 border border-[#ffffff36] relative before:contents-[''] before:absolute before:-top-0 before:left-1/2 before:w-[50px] before:h-[1px] before:bg-[linear-gradient(to_right,_transparent,_#fffdfd7c,_transparent)] before:-translate-x-1/2 before:-translate-y-1/2"
            >
              Learn more
            </Link>
            <motion.div
              ref={section6.ref}
              {...fadeIn(section6.isInView, 0.5)}
              className="mt-20 lmd:w-[350px] h-[450px] lg:w-[400px] 2xl:w-[600px] lg:h-[350px] 2xl:h-[550px]"
            >
              <PhotoFrame img="award.jpg" />
            </motion.div>
          </motion.div>
          <motion.div
            ref={section7.ref}
            {...fadeIn(section7.isInView, 0.5)}
            className="mt-20 lg:-mt-16  lmd:w-[350px] lg:w-[400px] 2xl:w-[600px]"
            style={{ gridColumn: "1/3" }}
          >
            <h3 className="lg:text-[18px] 2xl:text-xl font-semibold">
              Hobbies & Interests
            </h3>
            <p className="mt-5 text-[#ffffff81] mb-10 2xl:text-[18px] text-[14px]">
              When I&apos;m not coding, you&apos;ll often find me exploring new
              places, diving into a good book, or sharpening my skills over a
              game of competitive chess—a passion that&apos;s been close to my
              heart for years.
            </p>
          </motion.div>
          <motion.div
            ref={section8.ref}
            {...fadeIn(section8.isInView, 0.7)}
            className="lmd:w-[350px] lg:-mt-16"
          >
            <div className="mt-20 lmd:w-[350px] h-[450px] lg:w-[400px] lg:h-[600px] 2xl:w-[600px] 2xl:h-[880px]">
              <PhotoFrame img="chess.JPG" />
            </div>
          </motion.div>
          <motion.div
            ref={section9.ref}
            {...fadeIn(section9.isInView, 0.8)}
            className="mt-28 lmd:w-[350px] lg:w-[400px] 2xl:w-[600px]"
          >
            <h3 className="lg-text[18px] 2xl:text-xl font-semibold">
              EUSSF{" "}
              <span className="text-sm">
                (Ethiopian University Students Sports Festival)
              </span>
            </h3>
            <p className="mt-5 text-[#ffffff81] mb-10 2xl:text-[18px] text-[14px]">
              Back in 2024, I had the honor of captaining my university chess
              team in the finals — a proud and defining moment in my journey
              both as a player and a leader. That same year, I also received
              official recognition from FIDE and earned my first international
              rating, marking a major milestone in my competitive chess career.
            </p>
            <motion.div
              ref={section10.ref}
              {...fadeIn(section10.isInView, 0.9)}
              className="h-[350px] mt-20 lg:h-[350px] 2xl:h-[550px]"
            >
              <PhotoFrame img="chess.png" />
            </motion.div>
          </motion.div>

          <div className="md:col-span-2 border-t border-[rgba(242,242,242,0.2)] mt-40 md:grid md:grid-cols-2 py-20 gap-20">
            <motion.h1
              ref={experienceTitle.ref}
              {...fadeIn(experienceTitle.isInView, 0.4)}
              className="pt-[2px] uppercase col-span-2 text-xs lg:text-sm 2xl:text-sm text-[#ffffff6a] before:contents-[''] before:inline-block before:size-[8px] lg:before:size-[11px] before:rounded-full tracking-widest before:bg-[#fff] before:shadow-[0px_0px_10px_#fff] relative before:absolute before:top-[0] before:translate-y-1/2 before:left-0 pl-5 lg:pl-7"
            >
              experience
            </motion.h1>
            <div>
              <motion.h2
                ref={experience1.ref}
                {...fadeIn(experience1.isInView, 0.5)}
                className="text-[24px] font-semibold md:my-0 md:mb-0 my-10 mb-2 md:text-[40px]"
              >
                YBS Market
              </motion.h2>
              <motion.a
                {...fadeIn(experience1.isInView, 0.7)}
                href="https://yandex.com/maps/org/ybs_software_development/160493912599/?ll=38.721921%2C8.933746&z=14"
                target="_blank"
                className="text-sm text-[#ffffffd5] cursor-pointer underline decoration-white flex gap-1 items-center"
              >
                yandex.com
                <ArrowUpRight size={14} />
              </motion.a>
            </div>
            <motion.div {...fadeIn(experience1.isInView, 0.6)}>
              <h3 className="text-[18px] md:text-[30px] font-semibold">
                Senior Front-End Developer
              </h3>
              <p className="text-[#ffffff81]">07/&apos;24 - Present</p>
              <p className="text-[#ffffffd5] mt-4 text-sm md:text-base md:w-2/3">
                I am leading a group of talented front-end developers and
                currently working on an e-commerce platform.
              </p>
            </motion.div>
            <div>
              <motion.h2
                ref={experience2.ref}
                {...fadeIn(experience2.isInView, 0.7)}
                className="text-[24px] font-semibold md:my-0 md:mb-0 my-10 mb-2 md:text-[40px]"
              >
                Pluto Technologies
              </motion.h2>
              <motion.a
                {...fadeIn(experience2.isInView, 0.7)}
                className="text-sm text-[#ffffffd5] cursor-pointer underline decoration-white flex gap-1 items-center"
                target="_blank"
                href="https://plutotechnologies.org"
              >
                plutotechnologies.org <ArrowUpRight size={14} />
              </motion.a>
            </div>
            <motion.div {...fadeIn(experience2.isInView, 0.8)}>
              <h3 className="text-[18px] md:text-[30px] font-semibold">
                Full-Stack Developer
              </h3>
              <p className="text-[#ffffff81]">04/&apos;22 - 05/&apos;24</p>
              <p className="text-[#ffffffd5] mt-4 text-sm md:text-base md:w-2/3">
                I have spent much of my career here honing my skills and growing
                as a developer.
              </p>
            </motion.div>
            <motion.h2
              ref={experience3.ref}
              {...fadeIn(experience3.isInView, 0.9)}
              className="text-[24px] font-semibold md:my-0 md:mb-0 my-10 mb-2 md:text-[40px]"
            >
              Freelance
            </motion.h2>
            <motion.div {...fadeIn(experience3.isInView, 1.0)}>
              <h3 className="text-[18px] md:text-[30px] font-semibold">
                Full-Stack & UI/UX Developer
              </h3>
              <p className="text-[#ffffff81]">04/&apos;21 - 06/&apos;22</p>
              <p className="text-[#ffffffd5] mt-4 text-sm md:text-base md:w-2/3">
                I have completed 10+ projects during this phase of my carrer.
                <a
                  href="https://blackcube.com"
                  className="text-white underline mx-2"
                  target="_blank"
                >
                  blackcube
                </a>
                was one I was most proud of.
              </p>
            </motion.div>
            <motion.div
              ref={signature.ref}
              {...fadeIn(signature.isInView, 1.1)}
              className="mt-20 md:mt-10 col-span-2"
            >
              <p className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
                Thanks for Stopping by !
              </p>
              <Image
                src={"/img/sign.png"}
                alt="Yonas Workneh Signature"
                width={100}
                height={100}
                className="w-32 h-14 mt-5"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </Curve>
  );
}
