const fs = require("fs");

// CRUD OPERATIONS
// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE

// Read a file
// fs.readFile("passwords.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File content: ", data);
// });

// Read as Stream
const readStream = fs.createReadStream("passwords.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});

// const names = "\nHEllo. !";

// Write a file | Create
// fs.writeFile("studenta.txt", names, "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

// append a file | Create
// for (let i = 0; i < 1000; i = i + 2) {
//   fs.appendFile("studenta.txt", i.toString() + "\n", "utf-8", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
// }

// copy file
// for (let i = 0; i < 10; i++) {
//   fs.copyFile("studenta.txt", `student${i}.txt`, (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("File copied");
//   });
// }
