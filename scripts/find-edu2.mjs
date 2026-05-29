import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
const idx = s.indexOf("Postgraduate");
console.log(s.substring(idx - 1200, idx + 2000));
