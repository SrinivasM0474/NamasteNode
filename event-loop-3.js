/***
 * Last line of the file
 * process.nextTick
 * Promise
 * Timer Expired
 * setImmediate
 * File Reading CB
 * 2nd nextTick
 * 2nd setImmediate
 * 2nd Timer
 */

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);
  process.nextTick(() => console.log("2nd nextTick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("File Reading CB");
});

process.nextTick(() => console.log("process.nextTick"));

console.log("Last line of the file");
