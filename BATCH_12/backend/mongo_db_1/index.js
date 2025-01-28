const express = require('express');
const app = express();
const port = 3000;
const { connectDB, loginEmail, signup, resetPassword } = require("./src/config/db");

app.use(express.json());

// Connect to MongoDB before starting the server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB", error);
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const data = await loginEmail(email, password);
    console.log(data);
    res.send({ data });
});

app.post('/reset', async (req, res) => {
    const { email, password, new_password } = req.body;
    const data = await resetPassword(email, password, new_password);
    console.log(data);
    res.send({ data });
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const data = await signup(email, password);
    console.log(data);
    res.send({ data });
});

// // Gracefully shut down the server and MongoDB connection
// process.on('SIGINT', async () => {
//     console.log("Shutting down...");
//     await client.close();
//     process.exit(0);
// });
