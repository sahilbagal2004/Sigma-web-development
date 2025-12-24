// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res)=> {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World231\n');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


 const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worlddw!')
})

app.get('/contact', (req, res) =>{
    res.send('Hello Worlddw!')
})
app.get('/about us', (req, res) =>{
    res.send('Hello Worlddw!')
})
app.get('/Sahil', (req, res) =>{
    res.send('Hello Worlddw2331!')
})
app.get('/contact me', (req, res) =>{
    res.send('Hello Worlddw!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})