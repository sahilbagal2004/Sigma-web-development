const { error } = require('console');
const fs = require('fs');

console.log("starting");

fs.writeFile("sahil.txt", "Hello Sahil!", ()=>{
    console.log("done")
    fs.readFile("sahil.txt", (error, data)=>{
        console.log(error, data.toString());
    });
});
fs.appendFile("sahil.txt", "sahil bagavvd akj", (e, d)=>{
    console.log(d)
})
console.log("ending");