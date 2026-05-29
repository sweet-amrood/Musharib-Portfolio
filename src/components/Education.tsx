"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SectionIntroGradient } from "@/components/ui/SectionIntro";
import { EducationLogo } from "@/components/ui/EducationLogo";
import { EducationTimeline } from "./EducationTimeline";

export function Education() {
  const items = portfolio.education.items;

  return (
    <div className="flex flex-row justify-evenly">
      <div className="lg:flex flex-col justify-evenly hidden gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            whileInView={{ y: [-5, 5] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <EducationLogo src={item.image} alt={item.institution} />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        <SectionIntroGradient
          gradient="Education"
          gradientOnly
          subtitle={portfolio.education.subtitle}
        />

        <div className="w-fit mx-auto flex flex-col lg:items-end relative px-10 lg:px-0 gap-10">
          {items.map((item, index) => (
            <EducationTimeline
              key={item.title}
              date={item.period}
              first={index === 0}
            >
              <div className="flex items-start gap-3">
                <div className="lg:hidden shrink-0">
                  <EducationLogo
                    src={item.image}
                    alt={item.institution}
                    className="h-14 w-14 p-2"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="font-bold lg:text-base text-sm">{item.title}</h3>
                  <p className="lg:text-sm text-xs text-[#787878] flex items-center gap-2">
                    <span className="hidden sm:inline-flex shrink-0 h-5 w-5 relative">
                      <Image
                        src={item.image}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                    {item.institution}
                  </p>
                  <p className="lg:text-base text-sm">{item.description}</p>
                  {item.extra ? (
                    <p className="font-bold lg:text-base text-sm">{item.extra}</p>
                  ) : null}
                </div>
              </div>
            </EducationTimeline>
          ))}
        </div>
      </div>

      <div className="lg:flex flex-col justify-evenly hidden gap-8">
        {items.map((item, i) => (
          <motion.div
            key={`${item.title}-right`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="relative flex h-24 w-24 items-center justify-center mx-auto"
          >
            <div className="absolute inset-2 border-2 border-dashed border-[#FF4400]/40 rounded-full" />
            <EducationLogo
              src={item.image}
              alt={item.institution}
              className="relative z-10 h-16 w-16 p-2"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
