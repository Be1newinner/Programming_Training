const express = require("express");

const app = express()

app.get("/", (req, res) => {
    return res.send({
        message: "Hello how are you"
    })
})

app.get("/users", (req, res) => {
    return res.send({
        message: "Hello you are at users page"
    })
})

app.get("/users/:name", (req, res) => {

    const params = req.params;

    // console.log(params.name)

    // return res.send({
    //     message: `Hello ${params.name} !, you are at users page`
    // })
    return res.send({
        message: "Hello " + params.name + "!, you are at users page"
    })
})

app.get("/products", (req, res) => {
    return res.send({
        message: "Hello you are at products page"
    })
})

app.listen(8000, () => {
    console.log("YOU ARE CONNECTED")
})