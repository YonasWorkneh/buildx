"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton({
  bgColor = "bg-black sm:bg-black/40",
}: {
  bgColor?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`${bgColor} border border-[#45454576] rounded-full p-2 px-5 flex gap-2 items-center justify-center text-[#ffffffdb] w-fit fixed top-10 left-10 z-[100] cursor-pointer hover:opacity-80 transition-opacity`}
    >
      &larr;
      <span>Back</span>
    </button>
  );
}
