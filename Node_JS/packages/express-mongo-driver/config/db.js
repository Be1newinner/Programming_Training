const { MongoClient } = require('mongodb');
require('dotenv').config();

// const uri = process.env.MONGO_URI;

const client = new MongoClient("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {

        await client.connect();
        console.log("Connected to MongoDB!");

    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        return;
    }
}

module.exports = { client, connectDB };
