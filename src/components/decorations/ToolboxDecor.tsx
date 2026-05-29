"use client";

import { motion } from "framer-motion";

export function ToolboxDecorLeft() {
  return (
    <div className="lg:flex flex-col justify-between hidden">
      <div className="h-40 flex justify-center items-center">
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="h-40 w-40 rounded-full bg-[#FFA100] opacity-90"
        />
      </div>
      <div className="h-40 flex justify-center items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="h-20 w-20"
          style={{
            background:
              "radial-gradient(circle, #6FE2EF 30%, transparent 70%)",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      </div>
      <div className="h-40 flex justify-center items-center">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="h-12 w-12 rounded-full bg-[#d75585] opacity-80"
        />
      </div>
    </div>
  );
}

export function ToolboxDecorRight() {
  return (
    <div className="lg:flex flex-col justify-between hidden">
      <div className="h-40 flex justify-center items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="h-32 w-32 rounded-full border-4 border-[#B265FF] opacity-40"
        />
      </div>
      <div className="h-40 flex justify-center items-center">
        <motion.div
          initial={{ y: -5 }}
          animate={{ y: 5 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-[#B265FF] to-[#FFA100] opacity-30"
        />
      </div>
      <div className="h-40 flex justify-center items-center">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="h-14 w-14 bg-[#ff7200] opacity-50 rotate-45"
        />
      </div>
    </div>
  );
}
