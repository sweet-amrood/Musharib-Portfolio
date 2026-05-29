"use client";

import { motion } from "framer-motion";
import { gradientLine } from "@/lib/styles";
import { fadeIn, fadeUp, viewOnce } from "@/lib/motion";

interface EducationTimelineProps {
  date: string;
  first?: boolean;
  children: React.ReactNode;
}

export function EducationTimeline({
  date,
  first = false,
  children,
}: EducationTimelineProps) {
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-fit">
      <motion.p {...fadeIn} className="text-[#919191] lg:min-w-[140px]">
        {date}
      </motion.p>

      <div className="lg:flex flex-col items-center hidden relative">
        {first && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={viewOnce}
            className={`${gradientLine} absolute w-1 flex flex-col items-center gap-28 rounded-full top-0 bottom-0`}
          >
            <div className="h-3 w-3 bg-[#B265FF] rounded-full z-10 mb-2 shrink-0" />
            <div className="h-3 w-3 bg-[#d75585] rounded-full z-10 shrink-0" />
            <div className="h-3 w-3 bg-[#FFA100] rounded-full z-10 shrink-0" />
          </motion.div>
        )}
      </div>

      <motion.div {...fadeUp} className="flex flex-col gap-2 max-w-xl">
        {children}
      </motion.div>
    </div>
  );
}
