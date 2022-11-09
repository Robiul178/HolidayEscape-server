const express = require('express')
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ceo0gle.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('simpleNode').collection('users');

        const user = {
            name: 'testing',
            email: 'any@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result)

    }
    finally {

    }
}
run().catch(err => console.log(err))







const services = require("./data/services.json")


app.get('/', (req, res) => {
    res.send('Api running');
});

app.get("/services", (req, res) => {
    res.send(services)
});


app.get("/services/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = services?.find((p) => p.id == id);
    if (!getSingleItem) {
        res.send('no');
    }
    res.send(getSingleItem);
});


app.listen(port, () => {
    console.log('Server is Working', port);
});