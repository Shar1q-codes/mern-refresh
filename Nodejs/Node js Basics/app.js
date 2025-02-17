// console.log("Hello Node js");

// console.log("My first NODE JS app");

const readline = require("readline"); // Require and interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your name: ", (name) => {
  console.log("Hi " + name);
  rl.close();
});

// listening events
rl.on("close", () => {
  console.log("Interface Closed");
});
