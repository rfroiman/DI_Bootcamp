const _ = require("lodash");

const {
    add,
    multiply
} = require("./math");

const sum = add(10, 5);
const multiplication = multiply(10, 5);

console.log("Addition:", sum);
console.log("Multiplication:", multiplication);

const numbers = [10, 20, 30, 40];

console.log("Sum with Lodash:", _.sum(numbers));
console.log("Maximum:", _.max(numbers));