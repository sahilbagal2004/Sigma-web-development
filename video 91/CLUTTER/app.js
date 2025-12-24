const fs = require("fs");
const path = require("path");

const folderPath = "./clutter";

// read all files
const files = fs.readdirSync(folderPath);

files.forEach(file => {
  const ext = path.extname(file);

  if (ext === ".jpg" || ext === ".png") {
    fs.mkdirSync(`${folderPath}/images`, { recursive: true });
    fs.renameSync(`${folderPath}/${file}`, `${folderPath}/images/${file}`);
  }

  else if (ext === ".pdf") {
    fs.mkdirSync(`${folderPath}/documents`, { recursive: true });
    fs.renameSync(`${folderPath}/${file}`, `${folderPath}/documents/${file}`);
  }

  else if (ext === ".zip") {
    fs.mkdirSync(`${folderPath}/archives`, { recursive: true });
    fs.renameSync(`${folderPath}/${file}`, `${folderPath}/archives/${file}`);
  }
});

console.log("Done ✅");

