import dynamic from "next/dynamic";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Toolbox } from "./Toolbox";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { About } from "./About";
import { Footer } from "./Footer";
import { Section } from "./ui/Section";

const GitHubRepos = dynamic(
  () => import("./GitHubRepos").then((m) => m.GitHubRepos),
  {
    loading: () => (
      <p className="text-center animate-pulse text-[#787878] py-12">
        Loading repositories...
      </p>
    ),
  },
);

export function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="relative pb-16 lg:pb-0">
        <Section id="index">
          <Hero />
        </Section>

        <div className="flex flex-col gap-20 pt-20">
          <Section id="toolbox">
            <Toolbox />
          </Section>
          <Section id="experience">
            <Experience />
          </Section>
          <Section id="education">
            <Education />
          </Section>
          <Section id="github">
            <GitHubRepos />
          </Section>
          <Section id="about">
            <About />
          </Section>
          <Footer />
        </div>
      </main>
    </>
  );
}
