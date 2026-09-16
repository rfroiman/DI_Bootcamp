const greet = require("./greeting");
const colorfulMessage = require("./colorful-message");
const readFile = require("./read-file");

console.log("=== DAILY CHALLENGE ===");

console.log(greet("Rogério"));

colorfulMessage();

console.log("\nFile content:");

readFile();

console.log("\n=== CHALLENGE COMPLETED ===");