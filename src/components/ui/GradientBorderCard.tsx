"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gradientBorder } from "@/lib/styles";
import { fadeUp } from "@/lib/motion";

interface GradientBorderCardProps {
  image: string;
  imageVariant?: "logo" | "photo";
  title: string;
  meta: string;
  demoUrl?: string;
  children: React.ReactNode;
}

export function GradientBorderCard({
  image,
  imageVariant = "photo",
  title,
  meta,
  demoUrl,
  children,
}: GradientBorderCardProps) {
  const isLogo = imageVariant === "logo";
  return (
    <motion.div
      {...fadeUp}
      className={`overflow-hidden z-20 w-fit lg:max-w-[70rem] max-w-72 rounded-2xl mx-auto ${gradientBorder}`}
    >
      <div className="rounded-[0.9rem] bg-white min-w-36 min-h-20 lg:max-h-44 grid lg:grid-cols-12 grid-cols-1 grid-rows-1 overflow-hidden">
        <div
          className={`relative col-span-2 min-h-64 lg:min-h-0 max-h-44 w-full flex items-center justify-center ${
            isLogo ? "bg-slate-50 p-6" : ""
          }`}
        >
          <Image
            src={image}
            alt=""
            fill={!isLogo}
            width={isLogo ? 72 : undefined}
            height={isLogo ? 72 : undefined}
            sizes="120px"
            className={
              isLogo
                ? "relative h-16 w-16 object-contain"
                : "object-cover object-center"
            }
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-1 w-fit col-span-10 py-2 px-5">
          <h3 className="font-bold lg:text-lg">{title}</h3>
          <p className="lg:text-sm text-xs text-[#787878]">{meta}</p>
          <p className="text-sm text-justify">{children}</p>
          {demoUrl ? (
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white bg-gradient-to-r from-[#B265FF] via-[#FF4400] to-[#FFA100] px-3 py-1 text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Live demo
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
