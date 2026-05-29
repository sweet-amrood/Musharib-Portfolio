import Image from "next/image";

interface EducationLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export function EducationLogo({ src, alt, className = "" }: EducationLogoProps) {
  const isPhoto = src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".webp");

  return (
    <div
      className={`flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-slate-100 bg-white p-3 shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={isPhoto ? 80 : 56}
        height={isPhoto ? 80 : 56}
        className={`object-contain ${isPhoto ? "h-16 w-16" : "h-14 w-14"}`}
        loading="lazy"
      />
    </div>
  );
}
