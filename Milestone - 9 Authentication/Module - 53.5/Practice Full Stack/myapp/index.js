const express = require('express')
const phones = require('./phones.json')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send("Server is running perfectly. ");
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {}
    console.log(phone)
    res.send(phone)
})

app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port)
})