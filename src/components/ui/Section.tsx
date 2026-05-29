import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-[4.5rem]", className)}>
      {children}
    </section>
  );
}
