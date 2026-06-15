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

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pt-8 lg:gap-8 lg:pt-10">
        <h1 className="text-center text-2xl font-bold leading-snug lg:text-3xl">
          I&apos;m <GradientText>{portfolio.titleGradientName}</GradientText>,{" "}
          <br />
          {portfolio.title}
        </h1>

        <div className="relative flex w-full flex-col items-center gap-5 lg:flex-row lg:items-end lg:justify-center lg:gap-6">
          <div className="relative hidden shrink-0 text-right lg:block lg:max-w-[12rem] lg:pb-2">
            <span className="absolute -right-4 -top-2 select-none text-base">
              ☀️
            </span>
            <motion.div {...fadeUp} className="flex flex-row items-center justify-end gap-2">
              <span className="select-none text-xl">📍</span>
              <h2 className="text-2xl font-bold lg:text-3xl">{portfolio.location.city}</h2>
            </motion.div>
            <motion.p {...fadeUp} className="text-sm text-gray-600 lg:text-base">
              {portfolio.location.region}
            </motion.p>
          </div>

          <div className="relative shrink-0">
            <div className="absolute -left-3 top-4 hidden h-10 w-10 rounded-full bg-[#d75585]/20 lg:block" />
            <div className="absolute -right-2 bottom-0 hidden h-10 w-10 rotate-12 rounded-lg bg-gradient-to-br from-[#B265FF]/30 to-[#FFA100]/30 lg:block" />
            <HeroIllustration />
          </div>

          <motion.div
            {...fadeUp}
            className="relative hidden shrink-0 lg:block lg:max-w-[15rem] lg:pb-2"
          >
            <span className="absolute -left-6 top-0 select-none text-3xl leading-none">
              &ldquo;
            </span>
            <p className="text-base leading-relaxed lg:text-lg">
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

        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          <CategoryTab active={false} onClick={() => setResumeOpen(true)}>
            Download Resume
          </CategoryTab>
          <a
            href={portfolio.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block min-w-36 rounded-full border-2 border-white bg-gradient-to-r from-[#B265FF] via-[#FF4400] to-[#FFA100] px-5 py-2.5 text-center text-white"
          >
            <p className="text-base font-medium lg:text-lg">Linkedin</p>
          </a>
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center lg:hidden">
          <p className="text-2xl font-bold">{portfolio.location.city}</p>
          <p className="text-sm text-gray-600">{portfolio.location.region}</p>
          <p className="mt-3 max-w-sm text-base leading-relaxed">
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
        </div>
      </div>
    </>
  );
}
