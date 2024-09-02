const path = require("path");
const filePath = "c://home/user/file.txt";

// // Example: Absolute Path
// const absolutePath = "/home/user/documents/file.txt";

// // Example: Relative Path
// const relativePath = "./documents/file.txt";

// // Convert Relative Path to Absolute Path
// const absoluteFromRelative = path.resolve(relativePath);
// console.log(absoluteFromRelative); // Outputs: /home/user/documents/file.txt

// Get the file name
// const baseName = path.basename(filePath);
// console.log(baseName); // Outputs: file.txt

// const baseNameWithoutExt = path.basename(filePath, ".txt");
// console.log(baseNameWithoutExt); // Outputs: file

// Get the directory
// const dirName = path.dirname(relativePath);
// console.log(dirName); // Outputs: /home/user

// Get the extension
// const extName = path.extname(filePath);
// console.log(extName); // Outputs: .txt

// E. Path Joining
// const crossPlatformPath = path.join("home", "user", "documents", "file.txt");
// console.log(crossPlatformPath); // Outputs: home/user/documents/file.txt on Unix, home\user\documents\file.txt on Windows

// E.1 Path Seperator
console.log(`Path separator: ${path.sep}`);
