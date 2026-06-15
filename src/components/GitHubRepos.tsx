"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SectionIntroGradient } from "@/components/ui/SectionIntro";
import { gradientBorder } from "@/lib/styles";
import { fadeUp } from "@/lib/motion";
import { getRepoIcon } from "@/lib/project-icons";
import Image from "next/image";

interface Repo {
  id: number;
  name: string;
  repoSlug?: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

function RepoCard({
  title,
  language,
  description,
  url,
  icon,
}: {
  title: string;
  language: string | null;
  description: string | null;
  url: string;
  icon?: string;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...fadeUp}
      className={`block overflow-hidden z-20 rounded-2xl ${gradientBorder} lg:col-span-4`}
    >
      <div className="rounded-[0.9rem] bg-white p-5 min-h-36 flex flex-col gap-2 h-full">
        <div className="flex items-center gap-3">
          {icon ? (
            <Image
              src={icon}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 object-contain"
            />
          ) : (
            <span className="h-8 w-8 shrink-0 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-[#222222]">
              {title.charAt(0)}
            </span>
          )}
          <h3 className="font-bold lg:text-lg text-base">{title}</h3>
        </div>
        {language && (
          <p className="text-xs text-[#787878] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B265FF]" />
            {language}
          </p>
        )}
        <p className="text-sm text-justify text-[#787878] flex-1 line-clamp-4">
          {description || "No description provided."}
        </p>
      </div>
    </motion.a>
  );
}

export function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `/api/github?username=${encodeURIComponent(portfolio.githubUsername)}`,
        );
        if (res.ok) setRepos(await res.json());
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="relative">
      <div className="mb-10">
        <SectionIntroGradient
          before="GitHub"
          gradient="Repos"
          subtitle={portfolio.github.subtitle}
        />
      </div>

      <div className="absolute right-32 bottom-[-2rem] z-0 h-36 w-36 rounded-2xl bg-gradient-to-tr from-[#B265FF]/20 to-[#FFA100]/30 hidden lg:block" />
      <div className="absolute left-32 bottom-[-2rem] z-0 h-36 w-24 rounded-full bg-[#d75585]/15 hidden lg:block" />

      {loading ? (
        <p className="text-center animate-pulse text-[#787878]">
          Loading repositories...
        </p>
      ) : (
        <div className="grid lg:grid-cols-12 lg:grid-rows-2 grid-cols-1 gap-5 lg:w-[70rem] w-72 mx-auto">
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              title={repo.name}
              language={repo.language}
              description={repo.description}
              url={repo.html_url}
              icon={getRepoIcon(repo.repoSlug ?? repo.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
