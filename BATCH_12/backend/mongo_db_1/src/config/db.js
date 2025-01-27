const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

let database;

async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB connected!");
        database = client.db('ecommerce');
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

async function loginEmail(email, password) {
    try {
        const users = database.collection('users');
        const user = await users.findOne({ email, password });
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
    }
}

async function signup(email, password) {
    try {
        const users = database.collection('users');
        const user = await users.insertOne({ email, password });
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { connectDB, loginEmail, signup }
