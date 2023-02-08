const express = require('express')
const { readFile } = require('fs')
const app = express()
const port = 8080
const fs = require('fs');

app.get('/', (req, res) => {
    let content = 'hello world'
    var someHTML = "<h1>Hello World!!!</h1>"
    res.send(someHTML)
})

app.get('/hello/', (req, res) => {
    const content = fs.readFileSync("qa.html", 'utf8')
    res.send(content)
})

app.listen(port, () => {
    console.log(`Example app is listenint ot port ${port}`)
})