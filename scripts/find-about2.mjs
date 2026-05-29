import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
const idx = s.indexOf("More than just lines");
console.log(s.substring(idx - 800, idx + 2000));
