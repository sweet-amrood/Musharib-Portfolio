"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 51 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.5 0L31.4 20.6L51 23.2L36.8 38.4L40.3 58.5L25.5 48L10.7 58.5L14.2 38.4L0 23.2L19.6 20.6L25.5 0Z"
        fill="#B265FF"
        opacity="0.85"
      />
    </svg>
  );
}

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-60 h-80 flex justify-center items-end overflow-hidden">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 w-[11.4rem] max-w-full"
      >
        <Image
          src={images.portrait}
          alt="Profile"
          width={400}
          height={560}
          sizes="(max-width: 768px) 11rem, 11.4rem"
          className="w-full h-auto object-contain object-bottom"
          style={{ width: "100%", height: "auto" }}
          priority
          unoptimized
        />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10], rotate: ["15deg", "-15deg"], scale: [0.6, 1] }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-0 top-2/4 z-20 pointer-events-none"
      >
        <Star className="w-8 h-8" />
      </motion.div>
      <motion.div
        animate={{ y: [-15, 5], rotate: ["15deg", "-15deg"], scale: [0.6, 1] }}
        transition={{
          ease: "easeInOut",
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute right-0 top-1/3 z-20 pointer-events-none"
      >
        <Star className="w-6 h-6" />
      </motion.div>
      <motion.div
        animate={{ scale: [0.6, 1] }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-[-1.7rem] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <Star className="w-5 h-5" />
      </motion.div>
    </div>
  );
}
