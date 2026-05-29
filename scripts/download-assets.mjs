import fs from "fs";
import path from "path";

const s = fs.readFileSync("ref.js", "utf8");
const base = "https://gutierrez-cv.vercel.app";
const found = new Set();

for (const m of s.matchAll(/\/assets\/[^"'\\]+\.(png|svg|webp|jpg|jpeg)/gi)) {
  found.add(m[0].replace(/^\//, ""));
}

const outDir = path.join("public", "ref-assets");
fs.mkdirSync(outDir, { recursive: true });

for (const asset of found) {
  const url = `${base}/${asset}`;
  const file = path.join(outDir, path.basename(asset));
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(file, buf);
      console.log("OK", asset);
    } else {
      console.log("FAIL", res.status, asset);
    }
  } catch (e) {
    console.log("ERR", asset, e.message);
  }
}
