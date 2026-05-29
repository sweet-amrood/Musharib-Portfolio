import { portfolio } from "@/data/portfolio";
import { SectionIntroGradient } from "@/components/ui/SectionIntro";
import { GradientBorderCard } from "@/components/ui/GradientBorderCard";

export function Experience() {
  return (
    <div className="flex flex-col gap-5 relative">
      <div className="mb-5">
        <SectionIntroGradient
          before="Professional"
          gradient="Experiences"
          subtitle={portfolio.experience.subtitle}
        />
      </div>

      <div className="absolute h-14 left-14 bottom-20 lg:block hidden text-4xl opacity-60">
        😊
      </div>
      <div className="absolute h-20 left-36 top-24 lg:block hidden w-20 rounded-xl bg-[#B265FF]/20 rotate-12" />
      <div className="absolute h-36 right-32 bottom-32 lg:block hidden w-24 rounded-full bg-[#FFA100]/20" />
      <div className="absolute h-14 right-36 top-24 lg:block hidden w-14 bg-[#d75585]/25 rotate-45" />

      <div className="flex flex-col gap-5">
        {portfolio.experience.items.map((item) => (
          <GradientBorderCard
            key={item.title}
            image={item.image}
            imageVariant={"imageVariant" in item ? item.imageVariant : "photo"}
            title={item.title}
            meta={item.meta}
          >
            {item.description}
          </GradientBorderCard>
        ))}
      </div>
    </div>
  );
}
