import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
const idx = s.indexOf("function Sy");
console.log(s.substring(idx, idx + 5000));
