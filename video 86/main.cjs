// // const { createServer } = require('node:http');
// // import http from 'node:http';   
// // const hostname = '127.0.0.1';
// // const port = 3000;

// // const server = createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/html');
// //   res.end('<h1>Hello World</h1>');
// // });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });
// import { a, b , d} from "./mymodule.js";
// console.log(a, b , d);
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const a = require('./mymodule2.js')