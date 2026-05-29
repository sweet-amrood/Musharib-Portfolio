import { gradientText } from "@/lib/styles";

export function GradientText({ children }: { children: React.ReactNode }) {
  return <span className={gradientText}>{children}</span>;
}
