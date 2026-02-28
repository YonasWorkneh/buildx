"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialSidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      href: "https://github.com/YonasWorkneh",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yonas-workneh/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/yonna_hill",
      icon: (
         <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="icon w-[23px] sm:w-[25px] h-[23px] sm:h-[25px]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 2L2.5 10.5c-.7.3-.7.9 0 1.1L7 14.3l2.5 7.2c.3.7.9.7 1.2.1l3-5.1 5.6 4.3c.7.3 1.2-.1 1.3-.8L23.9 3c.1-.8-.5-1.2-1.2-1zm-5 16l-3.5-2.7-2.2 3.7-.7-4.4 7.6-7.1-9.3 5.9-4.1-1.3L20 4l-3 14z"
                    ></path>
                  </svg>
      ),
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1_kFjMpsEC9-W8pz29T5spCs2UNbliwG4/view?usp=sharing",
      icon: <FileText size={24} />,
    },
  ];

  const name = "BuildX";

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full z-[19999] items-center">
      <div className="flex flex-col items-center gap-6 px-4 py-8">
        {/* Top vertical line - ray effect */}
        <motion.div 
          className="w-[1px] h-40"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.25))"
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        />

        {/* Social Icons */}
        <div className="flex flex-col gap-8 items-center mb-8">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  className="text-white/40 hover:text-white/70 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                >
                  {link.icon}
                </motion.div>
              </Link>

              {/* Label on hover */}
              <AnimatePresence>
                {hoveredItem === link.name && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-full ml-4 top-0 -translate-y-1/2 pointer-events-none whitespace-nowrap z-50"
                  >
                    <div className="bg-[#1a1a1a] border border-white/10 px-3 py-1.5 rounded">
                      <span className="text-white/70 text-xs font-michroma tracking-wider">
                        {link.name}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Name - Vertical Rotated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
          className="my-8"
          style={{ minHeight: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div
            className="flex flex-col items-center gap-1"
            style={{ 
              transform: "rotate(-90deg)",
              transformOrigin: "center"
            }}
          >
            <span className="text-white/60 text-sm font-michroma tracking-widest uppercase whitespace-nowrap">
              {name}
            </span>
            <span className="text-white/60 text-[10px] font-michroma tracking-widest uppercase whitespace-nowrap word-spacing-widest">
              Software Engineering
            </span>
          </div>
        </motion.div>

       

        {/* Bottom vertical line - ray effect */}
        <motion.div 
          className="w-[1px] h-40 mt-8"
          style={{
            background: "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.25))"
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </aside>
  );
}

