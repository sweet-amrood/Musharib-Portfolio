import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
const idx = s.indexOf("function Xb");
console.log(s.substring(idx, idx + 2500));
