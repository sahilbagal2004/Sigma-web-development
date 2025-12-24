import fs from "fs/promises"

let a = await fs.readFile("sahil.txt");

let b = await fs.writeFile("sahil.txt", "Hello Sahil!");
console.log(a.toString())     