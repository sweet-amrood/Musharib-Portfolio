"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { fadeUp } from "@/lib/motion";
import { GradientText } from "@/components/ui/GradientText";
import { CategoryTab } from "@/components/ui/CategoryTab";
import { highlightGreen } from "@/lib/styles";
import { HeroIllustration } from "./HeroIllustration";
import { ResumeModal } from "./ResumeModal";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      <div className="mx-auto w-fit lg:mb-10 pt-10">
        <h1 className="text-center font-bold lg:text-3xl text-xl">
          I&apos;m <GradientText>{portfolio.titleGradientName}</GradientText>,{" "}
          <br />
          {portfolio.title}
        </h1>
      </div>

      <div className="mx-auto w-full flex flex-col gap-10 lg:grid lg:grid-cols-12 grid-cols-1 lg:px-40">
        <div className="flex flex-row items-center col-span-3">
          <div className="relative mx-auto hidden lg:block">
            <span className="text-lg absolute right-[-20px] top-[-10px] select-none">
              ☀️
            </span>
            <motion.div {...fadeUp} className="flex flex-row gap-2 items-center">
              <span className="text-xl select-none">📍</span>
              <h2 className="text-3xl font-bold">{portfolio.location.city}</h2>
            </motion.div>
            <motion.p
              {...fadeUp}
              className="w-full text-right text-sm text-gray-600"
            >
              {portfolio.location.region}
            </motion.p>
          </div>
        </div>

        <div className="relative lg:col-span-6 mx-auto w-60 flex justify-center">
          <div className="absolute right-0 bottom-[-1rem] w-20 h-20 rounded-lg bg-gradient-to-br from-[#B265FF]/30 to-[#FFA100]/30 rotate-12 hidden lg:block" />
          <div className="absolute left-0 top-5 w-20 h-20 rounded-full bg-[#d75585]/20 hidden lg:block" />
          <HeroIllustration />
        </div>

        <div className="lg:col-span-3 flex flex-row items-center mx-auto w-fit">
          <motion.div {...fadeUp} className="relative">
            <span className="select-none lg:w-7 w-5 relative right-7 text-4xl text-[#222222] leading-none">
              &ldquo;
            </span>
            <p className="lg:text-lg text-sm text-center">
              {portfolio.tagline.parts.map((part, i) => (
                <span key={i}>
                  {part.br && <br />}
                  {part.highlight ? (
                    <span className={highlightGreen}>{part.text}</span>
                  ) : (
                    part.text
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-3/12 mx-auto flex flex-row justify-end hidden lg:flex">
        <motion.span
          initial={{ rotate: "-25deg", y: -4, x: -2 }}
          animate={{ rotate: "10deg", y: 4, x: 2 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          className="w-12 select-none text-4xl"
        >
          ↘
        </motion.span>
      </div>

      <div className="w-fit mx-auto flex flex-row justify-between gap-3 mt-10 lg:mt-2 px-4">
        <CategoryTab active={false} onClick={() => setResumeOpen(true)}>
          Download Resume
        </CategoryTab>
        <a
          href={portfolio.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 py-2 lg:px-5 px-3 min-w-36 rounded-full bg-gradient-to-r from-[#B265FF] via-[#FF4400] to-[#FFA100] text-white border-2 border-white inline-block text-center"
        >
          <p className="lg:text-base text-sm">Linkedin</p>
        </a>
      </div>

      <div className="lg:hidden flex flex-col items-center gap-2 mt-6 text-center">
        <p className="text-2xl font-bold">{portfolio.location.city}</p>
        <p className="text-sm text-gray-600">{portfolio.location.region}</p>
      </div>
    </>
  );
}
