require('dotenv').config()

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const jwt = require('jsonwebtoken');
const app = express();


console.log(process.env.API)

// app.use(morgan("dev"))
app.use(express.json());
// app.use(express.static('static'))
app.use(express.static(path.join(__dirname, 'build')));

const users = [
    { id: 1, name: "John Doe", email: "john@example.com", password: "123" },
    {
        id: 2, name: "Jane Doe", email: "jane@example.com",
        password: "456"
    },
]

function logger(req, res, next) {
    // if (req.body.key === "Hello") {
    //     next();
    // } else {
    //     res.end("INVLAID ACCESS!");
    // }

    // console.log(req.originalUrl);

    console.log(req.method, " => ", req.originalUrl, " => ", Date.now())

    next();
}

app.use(logger)

// app.use('/static', express.static('index.html'))

app.all("/h2", (req, res) => {
    // const apiKey = req.headers["x-api-key"];
    // const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYmUxbmV3aW5uZXIiLCJpYXQiOjE3Mjg5OTM1NDF9.FYWJ0dD-DIOTU1hXWm-Bj09j6jWeyWDYXgud1waXkZg";

    // var token = jwt.sign({ foo: 'bar', exp: Math.floor(Date.now() / 1000) + (60 * 60), }, 'shhhhh');

    // const token = jwt.sign({ user: 'be1newinner' }, 'dasdasdasd8asd7sad8');

    // var decoded = jwt.verify(token, 'shhhhh');
    // console.log("DATA => ", token)
    // console.log(decoded) 

    res.cookie("access_token", "dsadasdasdasdsaddsadasdasd", {
        httpOnly: true,
        secure: true,
    })
    res.end()

    // res.end(token)
    // if (apiKey === "da4T38fwe4fwDDW238") {
    //     res.end(JSON.stringify({ name: "Vijay" }))
    // } else {
    //     res.end(JSON.stringify({ error: "Invalid Key!" }))
    // }
});

app.get("/auth/:name", (req, res) => {
    console.log(req.params.name)
    // console.log(req.body.email)
    res.end("hello")
})

app.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find((user) => user.email === email && user.password === password);

        if (user?.id) {
            res.end(JSON.stringify(user));
        } else {
            res.end(JSON.stringify({ error: "user Not Found" }))
        }
    } catch (e) {
        console.log(e);
        res.end(JSON.stringify({ error: "Unknown error" }))
    }
})

app.get('/file/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001)