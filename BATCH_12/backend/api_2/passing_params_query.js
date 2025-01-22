const express = require("express")
const app = express();

// Passing details in url as params

app.post("/login/:user/:pwrd", (req, res) => {
    // const data = req.params;
    // const user = data.user;
    // const pwrd = data.pwrd;

    // const user = req.params.user;
    // const pwrd = req.params.pwrd;

    const { user, pwrd } = req.params;
    console.log({ user, pwrd })

    res.send({
        message: "Logged in"
    })
})

// Passing details in url as query

app.post("/login", (req, res) => {

    //     // const data = req.query;
    const { name, age } = req.query;
    console.log({ name, age })

    res.send({
        message: "Logged in"
    })

})

app.listen(4001, () => {
    console.log("Server is started!")
})
