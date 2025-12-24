const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sigma")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening ${port}`));
server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} in use`);
    process.exit(1);
  }
  throw err;
});
