const express = require('express')
const app = express()
const port = 3000
const { connectDB, db } = require("./src/config/db")

connectDB();

app.post('/', (req, res) => {
    db.collection("users").insertOne({
        email: "be1newinner@gmail.com", password: "123456"
    })
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    db.collection("users").findOne({})
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
