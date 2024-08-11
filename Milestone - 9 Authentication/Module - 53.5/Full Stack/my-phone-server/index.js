const express = require('express')
const cors = require('cors')

const phones = require('./phones.json')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send("My phone server is running.");
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:phoneId', (req, res) => {
    const phoneId = parseInt(req.params.phoneId);
    console.log(phoneId)

    const phone = phones.find(phone => phone.id === phoneId) || {}

    res.send(phone)
})

app.listen(port, () => {
    console.log("Port is running!");
})