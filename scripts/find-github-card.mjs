import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
const idx = s.indexOf("function px");
console.log(s.substring(idx, idx + 1200));
