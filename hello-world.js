//task 1
console.log("HELLO WORLD");
//task2
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!!!!</h1>");
  res.end();
});
server.listen(3000, () => console.log("server is running on port 3000"));
// task 3
const fs = require("fs");
const path = require("path");
/*fs.writeFile(path.join(__dirname, "welcome.txt"), "Hello Node", (err) => {
  if (err) throw err;
  console.log("File written to...");
});*/
//read and rename file
/*fs.rename(
  path.join(__dirname, "welcome.txt"),
  path.join(__dirname, "hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);*/
/*fs.readFile(path.join(__dirname, "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});*/
//task4
/*fs.writeFile(path.join(__dirname, "password-generator.js"), "", (err) => {
  if (err) throw err;
  console.log("File written to...");
});
*/
// task 5
fs.writeFile(path.join(__dirname, "email-sender.js"), "", (err) => {
  if (err) throw err;
  console.log("File written to...");
});
