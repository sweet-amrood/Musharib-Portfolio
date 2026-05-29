import Image from "next/image";

interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-50 hover:opacity-100 transition-opacity p-1"
      aria-label={label}
    >
      <Image src={icon} alt="" width={28} height={28} className="h-7 w-7" />
    </a>
  );
}
