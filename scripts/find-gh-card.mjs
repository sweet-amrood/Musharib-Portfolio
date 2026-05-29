import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
const idx = s.indexOf("children:u.description");
console.log(s.substring(idx - 600, idx + 400));
