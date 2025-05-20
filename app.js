require("./xyz");
// console.log(globalThis); //empty
// const { calculateSum, x } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");
const crypto = require("crypto");
const { calculateMultiply, calculateSum } = require("./calculate");
// const data = require("./data.json");
// console.log(data);

// console.log(globalThis === global);
// calculateSum(20, 30);
console.log("hello");

// Synchronous Function - WILL BLOCK THE MAIN THREAD - DON"T USE IT
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");

console.log("key is generated");

//Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2nd key generated");
});

var c = calculateMultiply(20, 30);
console.log(c);
