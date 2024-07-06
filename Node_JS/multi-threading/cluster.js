const cluster = require("cluster");
const http = require("http");
const os = require("os");
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new worker.`);
    cluster.fork();
  });
} else {
  const app = require("./app");
  const port = process.env.PORT || 3000;

  http.createServer(app).listen(port, () => {
    console.log(`Worker ${process.pid} started, listening on port ${port}`);
  });
}
