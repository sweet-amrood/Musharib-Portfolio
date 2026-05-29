"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { SectionIntroGradient } from "@/components/ui/SectionIntro";
import { CategoryTab } from "@/components/ui/CategoryTab";
import { SkillPill } from "@/components/ui/SkillPill";
import { ToolboxDecorLeft, ToolboxDecorRight } from "@/components/decorations/ToolboxDecor";

export function Toolbox() {
  const categories = portfolio.toolbox.categories;
  const [active, setActive] = useState(categories[0].label);
  const current = categories.find((c) => c.label === active) ?? categories[0];

  return (
    <div className="flex flex-row justify-evenly">
      <ToolboxDecorLeft />

      <div className="flex flex-col gap-10 relative justify-evenly min-h-[35rem]">
        <div className="mb-2">
          <SectionIntroGradient
            before="Take a look at my"
            gradient="Toolbox"
            subtitle={
              <>
                My go-to tools of the trade — the ones I use regularly
                <br />
                and am constantly refining.
              </>
            }
          />
        </div>

        <div className="mx-auto w-fit lg:flex flex-row grid grid-cols-2 lg:gap-5 gap-2">
          {categories.map((cat) => (
            <CategoryTab
              key={cat.id}
              active={active === cat.label}
              onClick={() => setActive(cat.label)}
            >
              {cat.label}
            </CategoryTab>
          ))}
        </div>

        <div className="lg:min-h-72">
          <div className="mx-auto w-fit grid lg:grid-cols-12 grid-cols-2 lg:gap-x-5 lg:gap-y-5 gap-2 px-10">
            {current.skills.map((skill) => (
              <SkillPill key={skill.name}>
                {skill.name}
              </SkillPill>
            ))}
          </div>
        </div>
      </div>

      <ToolboxDecorRight />
    </div>
  );
}
