// ==========================================
// EXERCISE 3 - REPEAT THE QUESTION
// ==========================================

console.log("\n===== EXERCISE 3 =====");

const prompt = require("prompt-sync")();

let number = Number(
    prompt("Enter a number: ")
);

while (number < 10) {

    console.log(
        "The number is smaller than 10. Please try again."
    );

    number = Number(
        prompt("Enter another number: ")
    );
}

console.log(
    "Good! The number is 10 or greater."
);
