const http = require("http");

const product = {
    name: "Vijayd asd asd s",
    price: 70
}

const server = http.createServer((req, res) => {
    // if (req.url === "/home") {
    //     res.end("home");
    // } else {
    //     res.statusCode = 404;
    //     res.end("404 Not found!");
    // }
    // res.setHeader("content-type", "application/json")
    // res.end(JSON.stringify(product));
    console.log(req.method)
    res.end("home");
    // console.log(req)

})


server.listen(3001, () => {
    console.log("Server is running on port 3001");
})