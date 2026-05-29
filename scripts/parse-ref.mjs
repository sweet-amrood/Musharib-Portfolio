import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");

const strings = [...s.matchAll(/"([A-Za-z][^"]{3,120})"/g)]
  .map((m) => m[1])
  .filter(
    (x) =>
      x.includes("class") ||
      x.includes("Toolbox") ||
      x.includes("Experience") ||
      x.includes("grid") ||
      x.includes("gradient") ||
      x.includes("text-[") ||
      x.includes("col-span") ||
      x.includes("Gustavo") ||
      x.includes("Resume") ||
      x.includes("About") ||
      x.includes("Education") ||
      x.includes("GitHub"),
  );

console.log([...new Set(strings)].join("\n"));

const classes = [...s.matchAll(/className:"([^"]+)"/g)].map((m) => m[1]);
console.log("\n--- UNIQUE CLASSES (sample) ---\n");
console.log([...new Set(classes)].slice(0, 60).join("\n"));

const assets = [...s.matchAll(/\/assets\/[A-Za-z0-9_.-]+/g)].map((m) => m[0]);
console.log("\n--- ASSETS ---\n");
console.log([...new Set(assets)].sort().join("\n"));

const dataUris = [...s.matchAll(/data:image\/[^"']{50,200}/g)].map((m) => m[0].slice(0, 80));
console.log("\n--- DATA URI COUNT ---", dataUris.length);

const aboutIdx = s.indexOf('name:"AboutMe"');
if (aboutIdx > -1) console.log("\n--- ABOUT ---\n", s.substring(aboutIdx - 800, aboutIdx + 2000));

const heroIdx = s.indexOf("Foto%20Inteira");
if (heroIdx > -1) console.log("\n--- HERO ---\n", s.substring(heroIdx - 2500, heroIdx + 1500));
