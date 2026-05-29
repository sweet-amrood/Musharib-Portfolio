"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { images } from "@/lib/images";
import { SectionIntroGradient } from "@/components/ui/SectionIntro";
import { highlightPurple } from "@/lib/styles";
import { fadeUp } from "@/lib/motion";
import { SocialLink } from "@/components/ui/SocialLink";
import { socialIcons } from "@/lib/tech-icons";

export function About() {
  return (
    <div>
      <div className="mb-10">
        <SectionIntroGradient
          before="About"
          gradient="Me"
          subtitle={portfolio.about.subtitle}
        />
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:grid-rows-1 w-fit mx-auto lg:gap-20 gap-10 flex flex-col items-center">
        <div className="flex flex-col gap-5 lg:col-span-4 items-center">
          <div className="h-full w-fit relative items-end justify-center flex rounded-b-full overflow-hidden min-h-96">
            <div className="bg-[#FFA100] rounded-full h-64 w-64 relative">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="absolute bottom-[-0.2rem] left-1/2 -translate-x-1/2 rounded-b-2xl overflow-hidden w-[11rem]"
              >
                <Image
                  src={images.portrait}
                  alt={portfolio.fullName}
                  width={176}
                  height={240}
                  sizes="11rem"
                  className="object-cover object-top w-full h-auto"
                  unoptimized
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center items-end">
            <span className="opacity-50 text-lg">📍</span>
            <p className="text-[#787878]">{portfolio.about.location}</p>
          </div>

          <div className="flex flex-row gap-4 justify-center items-center">
            <SocialLink
              href={portfolio.linkedinUrl}
              icon={socialIcons.linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href={portfolio.githubUrl}
              icon={socialIcons.github}
              label="GitHub"
            />
          </div>
        </div>

        <div className="flex flex-col lg:col-span-8 gap-5 w-11/12 items-center justify-center">
          <div className="flex flex-row gap-5 items-center">
            <h3 className="text-3xl font-bold">{portfolio.fullName}</h3>
            <span className="text-3xl" aria-hidden>
              😊
            </span>
          </div>

          <div className="flex flex-col gap-10 text-center lg:text-start">
            {portfolio.about.paragraphs.map((para, i) => (
              <p key={i} className="text-sm lg:text-base leading-relaxed">
                {"bold" in para && para.bold ? (
                  <>
                    {para.text}
                    <span className={`font-bold ${highlightPurple}`}>
                      {para.bold}
                    </span>
                    {para.suffix}
                  </>
                ) : (
                  para.text
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
