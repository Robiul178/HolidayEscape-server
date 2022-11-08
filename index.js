const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

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