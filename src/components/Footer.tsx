import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#222222] w-full p-5 text-[#ffffff26] text-center text-sm">
      Designed and made by {portfolio.fullName} - Copyright -{" "}
      {portfolio.footerYear}
    </footer>
  );
}
