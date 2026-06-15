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

/** Portrait scales from the image — no fixed empty frame */
export function HeroIllustration() {
  return (
    <div className="relative inline-flex shrink-0 items-end justify-center leading-none">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Image
          src={images.portrait}
          alt="Profile"
          width={800}
          height={1200}
          sizes="(max-width: 1024px) 55vw, 22rem"
          className="block h-auto w-auto max-h-[min(48vh,20rem)] sm:max-h-[min(52vh,22rem)] lg:max-h-[min(58vh,28rem)] max-w-[min(72vw,18rem)] sm:max-w-[min(65vw,20rem)] lg:max-w-[min(28vw,22rem)] object-contain object-bottom"
          priority
          unoptimized
        />
      </motion.div>
      <motion.div
        animate={{ y: [-6, 6], rotate: ["15deg", "-15deg"], scale: [0.7, 1] }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-[-0.5rem] top-1/2 z-20 pointer-events-none"
      >
        <Star className="w-5 h-5 lg:w-6 lg:h-6" />
      </motion.div>
      <motion.div
        animate={{ y: [-8, 4], rotate: ["15deg", "-15deg"], scale: [0.7, 1] }}
        transition={{
          ease: "easeInOut",
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute right-[-0.25rem] top-1/3 z-20 pointer-events-none"
      >
        <Star className="w-4 h-4 lg:w-5 lg:h-5" />
      </motion.div>
      <motion.div
        animate={{ scale: [0.7, 1] }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <Star className="w-4 h-4" />
      </motion.div>
    </div>
  );
}
