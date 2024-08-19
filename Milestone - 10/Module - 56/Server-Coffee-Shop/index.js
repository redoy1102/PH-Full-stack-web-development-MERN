const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rliqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

        // creating the database and a table named coffee for storing the information of coffee
        const coffeeCollection = client.db('coffeeDB').collection('coffee');

        //creating the table called users
        const userCollection = client.db("coffeeDB").collection('users');


        // -------------------------------------------------------------------------------------------------------------------------------------------------------
        //API's coffee

        app.post('/coffee', async(req, res) => {
            const newCoffee = req.body;

            const result = await coffeeCollection.insertOne(newCoffee);

            res.send(result);
        })

        app.get('/coffee', async(req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        })

        app.put('/coffee/:id',async(req, res) => {
            const id = req.params.id;
            const updatedCoffee = req.body;

            const filter = {_id: new ObjectId(id)}
            const options = {upsert: true};
            const coffee = {
                $set: {
                    name: updatedCoffee.name,
                    coffeeSupplier: updatedCoffee.coffeeSupplier,
                    coffeeCategory: updatedCoffee.coffeeCategory,
                    coffeeTaste: updatedCoffee.coffeeTaste,
                    chefName: updatedCoffee.chefName,
                    coffeeDetails: updatedCoffee.coffeeDetails,
                    photoUrl: updatedCoffee.photoUrl,
                    coffeePrice: updatedCoffee.coffeePrice
                }
            }

            const result = await coffeeCollection.updateOne(filter, coffee, options);

            res.send(result);
        })

        app.delete('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        })

        //--------------------------------------------------------------------------------------------------------------------------------------------------------

        //--------------------------------------------------------------------------------------------------------------------------------------------------------
        // API's of users
        app.post('/users', async(req, res) => {
            const users = req.body;
            const result = await userCollection.insertOne(users);
            res.send(result);
        })

        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray();
            console.log(result);
            res.send(result);
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })

        app.patch('/users', async (req, res) => {
            const user = req.body;
            const query = { email: user.email }
            const updatedDoc = {
                $set: {
                    lastLoggedAt: user.lastLoggedAt
                }
            }
            const result = await userCollection.updateOne(query, updatedDoc);
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running into the ${port} port.`)
})