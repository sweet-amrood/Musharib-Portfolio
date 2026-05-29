/** Shared framer-motion settings — fast, run once per element */
export const viewOnce = {
  once: true,
  amount: 0.15 as const,
};

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  viewport: viewOnce,
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.3 },
  viewport: viewOnce,
};
