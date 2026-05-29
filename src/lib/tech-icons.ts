/** Maps toolbox skill names to icon paths under /public/icons/tech */
const skillIcons: Record<string, string> = {
  JavaScript: "/icons/tech/javascript.svg",
  TypeScript: "/icons/tech/typescript.svg",
  React: "/icons/tech/react.svg",
  "Next.js": "/icons/tech/nextjs.svg",
  HTML: "/icons/tech/html.svg",
  CSS: "/icons/tech/css.svg",
  "Tailwind CSS": "/icons/tech/tailwind.svg",
  "Node.js": "/icons/tech/nodejs.svg",
  Express: "/icons/tech/express.svg",
  "REST APIs": "/icons/tech/nodejs.svg",
  "C++": "/icons/tech/cplusplus.svg",
  "MongoDB Atlas": "/icons/tech/mongodb.svg",
  MongoDB: "/icons/tech/mongodb.svg",
  Mongoose: "/icons/tech/mongodb.svg",
  Vercel: "/icons/tech/vercel.svg",
  Render: "/icons/tech/render.svg",
  Netlify: "/icons/tech/netlify.svg",
  Docker: "/icons/tech/docker.svg",
  Kubernetes: "/icons/tech/kubernetes.svg",
  "CI/CD": "/icons/tech/githubactions.svg",
  "GitHub Actions": "/icons/tech/githubactions.svg",
  Git: "/icons/tech/git.svg",
  GitHub: "/icons/tech/github.svg",
  NestJS: "/icons/tech/nestjs.svg",
  Redis: "/icons/tech/redis.svg",
  Prisma: "/icons/tech/prisma.svg",
};

export function getSkillIcon(skillName: string): string | undefined {
  return skillIcons[skillName];
}

export const socialIcons = {
  linkedin: "/icons/tech/linkedin.svg",
  github: "/icons/tech/github.svg",
} as const;
