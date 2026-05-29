import fs from "fs";
import path from "path";

const outEdu = path.join("public", "images", "education");
const outIcons = path.join("public", "icons", "education");
fs.mkdirSync(outEdu, { recursive: true });
fs.mkdirSync(outIcons, { recursive: true });

const downloads = [
  {
    file: path.join(outEdu, "lgu.png"),
    url: "https://lgu.edu.pk/wp-content/uploads/2024/01/lLAHORE-GARRISON-UNIVERSITY.png",
  },
  {
    file: path.join(outIcons, "civil-lines.svg"),
    url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bookstack.svg",
  },
  {
    file: path.join(outIcons, "govt-school.svg"),
    url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleclassroom.svg",
  },
];

for (const { file, url } of downloads) {
  const res = await fetch(url);
  if (!res.ok) {
    console.log("FAIL", path.basename(file), res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(file, buf);
  console.log("OK", path.basename(file));
}
