const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey its a get request")
  res.send('Hello World2!')
})
app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('heelo sajhlx')         
})
app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('heelo sajhlx')         
})
app.get('/index' ,(req, res) =>{
    console.log('hello sahil bagal')
    res.send('hello sahil bagal')
})

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

server.on('error', (err) => {
  console.error('Server error:', err)
})