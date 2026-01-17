"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./components/Cursor";
import { useCustomCursor } from "./components/Cursor";
import { PhoneContextProvider } from "./contexts/PhoneContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname();
  const { handleHoverStart, handleHoverEnd } = useCustomCursor();

  useEffect(
    function () {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2500);
    },
    [pathName]
  );

  useEffect(() => console.log("layout mounted"), []);

  return (
    <html lang="en">
      <head>
        <title>Yonas Workneh &mdash; Software Engineer</title>
      </head>
      <body>
        <PhoneContextProvider>
          <>
            <Cursor />
            <div
              className={`bg-[#1C1C1C] text-white  ${
                isLoading ? "min-h-svh flex items-center justify-center" : ""
              } `}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!pathName.includes("about") && <SocialSidebar />}
                  {!pathName.includes("projects") && <Header />}
                  <AnimatePresence mode="wait">
                    <motion.div
                      onHoverStart={handleHoverStart}
                      onHoverEnd={handleHoverEnd}
                    >
                      {children}
                    </motion.div>
                  </AnimatePresence>
                  {!pathName.includes("projects") && <Footer />}
                </>
              )}
            </div>
          </>
        </PhoneContextProvider>
      </body>
    </html>
  );
}
