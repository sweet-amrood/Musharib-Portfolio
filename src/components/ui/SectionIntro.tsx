import { GradientText } from "./GradientText";

interface SectionIntroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export function SectionIntro({ title, subtitle }: SectionIntroProps) {
  return (
    <div className="flex flex-col w-full justify-center text-center gap-2">
      <h2 className="text-center font-bold lg:text-3xl text-xl z-10">{title}</h2>
      <p className="text-xs lg:text-base">{subtitle}</p>
    </div>
  );
}

export function SectionIntroGradient({
  before,
  gradient,
  after,
  subtitle,
  gradientOnly = false,
}: {
  before?: string;
  gradient: string;
  after?: string;
  subtitle: React.ReactNode;
  gradientOnly?: boolean;
}) {
  return (
    <SectionIntro
      title={
        gradientOnly ? (
          <GradientText>{gradient}</GradientText>
        ) : (
          <>
            {before}
            {before && " "}
            <GradientText>{gradient}</GradientText>
            {after}
          </>
        )
      }
      subtitle={subtitle}
    />
  );
}
