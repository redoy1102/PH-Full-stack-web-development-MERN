const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send("My first ever server. YAHOOOOO I made my first server.")
})

app.listen(port, () => {
    console.log(`My first server is running on ${port}`)
})