import fs from "fs";
import path from "path";

const icons = {
  "javascript.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
  "typescript.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
  "react.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
  "nextjs.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
  "html.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg",
  "css.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
  "tailwind.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
  "nodejs.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
  "express.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg",
  "cplusplus.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg",
  "mongodb.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg",
  "aws.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg",
  "vercel.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg",
  "render.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/render.svg",
  "netlify.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netlify.svg",
  "docker.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
  "kubernetes.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg",
  "githubactions.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg",
  "linux.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg",
  "nginx.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg",
  "sqlserver.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg",
  "postgresql.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
  "mysql.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
  "git.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg",
  "github.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
  "postman.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg",
  "vscode.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg",
  "nestjs.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nestjs.svg",
  "linkedin.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
  "redis.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg",
  "prisma.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg",
};

const outDir = path.join("public", "icons", "tech");
fs.mkdirSync(outDir, { recursive: true });

for (const [file, url] of Object.entries(icons)) {
  const res = await fetch(url);
  if (!res.ok) {
    console.log("FAIL", file, res.status);
    continue;
  }
  const svg = await res.text();
  fs.writeFileSync(path.join(outDir, file), svg);
  console.log("OK", file);
}
