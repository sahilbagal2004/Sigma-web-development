const fs = require('fs').promises;

(async () => {
  let a = await fs.readFile('sahil.txt');
  await fs.writeFile('sahil.txt', 'Hello Sahil!');
  console.log(a.toString());
})();