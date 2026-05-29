import fs from "fs";

const s = fs.readFileSync("ref.js", "utf8");
for (const name of ["Uv=", "Hv=", "kv=", "qv=", "Zv=", "Me="]) {
  const idx = s.indexOf(name);
  if (idx > -1) console.log(name, s.substring(idx, idx + 120), "\n");
}
