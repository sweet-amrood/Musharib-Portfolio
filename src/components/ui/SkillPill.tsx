"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { getSkillIcon } from "@/lib/tech-icons";

interface SkillPillProps {
  children: string;
  icon?: string;
}

export function SkillPill({ children, icon }: SkillPillProps) {
  const iconSrc = icon ?? getSkillIcon(children);

  return (
    <motion.div
      {...fadeUp}
      className="lg:col-span-3 justify-center flex flex-row gap-3 bg-slate-100 py-4 px-6 lg:px-10 rounded-full items-center cursor-pointer lg:w-56 min-w-[9rem] border-gray-200 border-2 hover:bg-slate-200 hover:border-slate-200"
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 object-contain"
          loading="lazy"
        />
      ) : (
        <span className="h-6 w-6 shrink-0 rounded-full bg-[#222222]/10 flex items-center justify-center text-xs font-bold text-[#222222]">
          {children.charAt(0)}
        </span>
      )}
      <p className="text-sm font-medium">{children}</p>
    </motion.div>
  );
}
