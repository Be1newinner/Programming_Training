// Auth Service
// POST => /login       => Login
// POST => /signup      => signup
// PUT => /reset-password   => Reset

const express = require("express")
const app = express();

const users = [
    {
        user: "be1newinner",
        pwrd: "123456",
        name: "Vijay Kumar"
    },
    {
        user: "be1newinner2",
        pwrd: "123456",
        name: "Vijay Kumar"
    }
]

app.use(express.json())

app.post("/login", (req, res) => {

    const { user, password } = req.body;
    // console.log({ user, password })

    const resp = users.find((item) => {
        return item.user === user && item.pwrd === password
    })

    if (resp) {
        return res.send({
            message: "Logged in",
            data: resp
        })
    } else {
        return res.status(401).send({
            message: "Invalid Credentials",
            data: null
        })
    }

})

app.post("/signup", (req, res) => {

    const { username, password, fullname } = req.body;
    // console.log({ username, password, fullname })

    if (username && password && fullname) {

        if (users.find((item) => item.user === username)) {
            return res.send({
                message: "user already exist!"
            })
        }


        const prevLength = users.length;
        users.push({
            user: username,
            pwrd: password,
            name: fullname
        })

        console.log(users)

        const newLength = users.length

        if (newLength > prevLength) {
            return res.send({
                message: "signed up successfully!"
            })
        } else {
            return res.send({
                message: "signed up failed!"
            })
        }

    } else {
        return res.send({
            message: "signed up failed!"
        })
    }



})

app.put("/reset-password", (req, res) => {
    res.send({
        message: "reset password"
    })
})

app.listen(4001, () => {
    console.log("Server is started!")
})