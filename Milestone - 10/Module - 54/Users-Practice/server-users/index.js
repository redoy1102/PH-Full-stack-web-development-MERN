const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// using to access the data
app.use(express.json())

const port = process.env.PORT || 5000

const users = [
    {id: 1, name: 'John', email: 'john@gmail.com'},
    {id: 2, name: 'Doe', email: 'doe@gmail.com'},
    {id: 3, name: 'Fuad', email: 'fuad@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('Hello Wod!')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)

    res.send(newUser)
})

app.listen(port, () => {
    console.log(`CWR Server is running at ${port}`)
})