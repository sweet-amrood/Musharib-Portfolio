"use client";

import { portfolio, navLinks } from "@/data/portfolio";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

export function Header() {
  return (
    <>
      <header className="bg-[#222222] w-full h-16 flex flex-row justify-between px-6 lg:px-10 py-5 items-center sticky top-0 z-50">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex flex-row items-center gap-2 text-left"
        >
          <span className="text-white font-bold text-2xl">
            {portfolio.name.short}
          </span>
          <span className="h-[5px] w-[5px] mt-2 from-[#d0a1ff] via-[#ff6730] to-[#FFA100] bg-gradient-to-tr rounded-sm shrink-0" />
        </button>

        <nav className="lg:flex flex-row gap-4 items-center hidden">
          {navLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-[#888888] cursor-pointer hover:text-[#e9e9e9] text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#222222]/95 backdrop-blur-sm border-t border-[#333] px-2 py-2 flex justify-around gap-1">
        {navLinks.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className="text-[#888888] hover:text-white text-[10px] sm:text-xs px-2 py-1.5 transition-colors"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
