import { NextRequest, NextResponse } from "next/server";
import { portfolio } from "@/data/portfolio";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
};

function normalizeRepoName(name: string) {
  return name.toLowerCase();
}

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username");

  if (!username || username === "your-github-username") {
    return NextResponse.json([]);
  }

  const { excludeRepos, featuredRepos, repoOverrides } = portfolio.github;
  const excluded = new Set(excludeRepos.map(normalizeRepoName));

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API error" },
        { status: res.status },
      );
    }

    const repos: GitHubRepo[] = await res.json();
    const byName = new Map(
      repos
        .filter((repo) => !repo.fork && !excluded.has(normalizeRepoName(repo.name)))
        .map((repo) => [repo.name, repo]),
    );

    const curated = featuredRepos
      .map((repoName) => {
        const repo = byName.get(repoName);
        if (!repo) return null;

        const override = repoOverrides[repoName as keyof typeof repoOverrides];
        const description =
          override && "description" in override
            ? override.description
            : repo.description;
        return {
          id: repo.id,
          name: override?.displayName ?? repo.name,
          repoSlug: repoName,
          description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          topics: repo.topics ?? [],
        };
      })
      .filter(Boolean);

    return NextResponse.json(curated);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 },
    );
  }
}
