const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://codewithredoy:gb4SJy0OuvvykzbF@cluster0.rliqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Connect to the "usersDB" database and access its "users" collection
        const userCollection = client.db("usersDB").collection("users");

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const user = await userCollection.findOne(query)
            res.send(user)
        })

        app.put('/users/:id', async(req, res) => {
            const id = req.params.id;
            const user = req.body;
            console.log(id, user);


            // UPDATING INTO THE DATABASE
            const filter = {_id: new ObjectId(id)};
            const option = {upsert: true};

            const updatedUser = {
                $set:{
                    name: user.name,
                    email: user.email
                }
            }

            const result = await userCollection.updateOne(filter, updatedUser, option);

            res.send(result)
        })

        app.post('/users', async (req, res) => {
            const newUser = req.body;
            console.log("From server page:", newUser);

            // data is storing into the database
            const dbResponse = await userCollection.insertOne(newUser);
            res.send(dbResponse);
        })

        app.delete('/users/:id', async(req, res) => {
            const id = req.params.id;
            console.log("Deleted id from server: ", id)

            const query = { _id: new ObjectId(id) };
            const user = await userCollection.deleteOne(query);

            res.send(user);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Basic CURD is running at ${port}`)
})