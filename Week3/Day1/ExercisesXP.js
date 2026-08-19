// ==========================================
// EXERCISE 1 - LIST OF PEOPLE
// ==========================================

console.log("===== EXERCISE 1 =====");

const people = ["Greg", "Mary", "Devon", "James"];

// Remove Greg
people.shift();

console.log(people);

// Replace James with Jason
people[people.indexOf("James")] = "Jason";

console.log(people);

// Add your name
people.push("Rogério");

console.log(people);

// Mary's index
console.log("Mary's index:", people.indexOf("Mary"));

// Copy without Mary or your name
const peopleCopy = people.slice(1, 3);

console.log("Copy:", peopleCopy);

// Index of Foo
console.log("Index of Foo:", people.indexOf("Foo"));
// -1 because Foo does not exist

// Last element
const last = people[people.length - 1];

console.log("Last element:", last);


// ------------------------------------------
// Part II - Loops
// ------------------------------------------

console.log("\nAll people:");

for (let person of people) {
    console.log(person);
}


console.log("\nStop after Devon:");

for (let person of people) {

    console.log(person);

    if (person === "Devon") {
        break;
    }
}


// ==========================================
// EXERCISE 2 - YOUR FAVORITE COLORS
// ==========================================

console.log("\n===== EXERCISE 2 =====");

const colors = [
    "blue",
    "red",
    "green",
    "black",
    "purple"
];

for (let i = 0; i < colors.length; i++) {

    console.log(
        `My #${i + 1} choice is ${colors[i]}`
    );
}


// Bonus

console.log("\nBonus:");

const suffixes = [
    "st",
    "nd",
    "rd",
    "th",
    "th"
];

for (let i = 0; i < colors.length; i++) {

    console.log(
        `My ${i + 1}${suffixes[i]} choice is ${colors[i]}`
    );
}


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


// ==========================================
// EXERCISE 4 - BUILDING MANAGEMENT
// ==========================================

console.log("\n===== EXERCISE 4 =====");

const building = {
    numberOfFloors: 4,

    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2
    },

    nameOfTenants: [
        "Sarah",
        "Dan",
        "David"
    ],

    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500]
    }
};


// Number of floors
console.log(
    "Number of floors:",
    building.numberOfFloors
);


// Apartments on floors 1 and 3
console.log(
    "Apartments on floor 1:",
    building.numberOfAptByFloor.firstFloor
);

console.log(
    "Apartments on floor 3:",
    building.numberOfAptByFloor.thirdFloor
);


// Second tenant
console.log(
    "Second tenant:",
    building.nameOfTenants[1]
);


// Number of rooms
console.log(
    "Rooms in Dan's apartment:",
    building.numberOfRoomsAndRent.dan[0]
);


// Compare Sarah + David rent with Dan's rent

const sarahRent =
    building.numberOfRoomsAndRent.sarah[1];

const davidRent =
    building.numberOfRoomsAndRent.david[1];

const danRent =
    building.numberOfRoomsAndRent.dan[1];


if (sarahRent + davidRent > danRent) {

    building.numberOfRoomsAndRent.dan[1] = 1200;

    console.log(
        "Dan's rent was increased to 1200."
    );
}


// ==========================================
// EXERCISE 5 - FAMILY
// ==========================================

console.log("\n===== EXERCISE 5 =====");

const family = {
    father: "John",
    mother: "Mary",
    son: "Michael",
    daughter: "Emma"
};


// Print keys

console.log("\nKeys:");

for (let key in family) {

    console.log(key);
}


// Print values

console.log("\nValues:");

for (let key in family) {

    console.log(family[key]);
}


// ==========================================
// EXERCISE 6 - RUDOLF
// ==========================================

console.log("\n===== EXERCISE 6 =====");

const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer"
};

let sentence = "";

for (let key in details) {

    sentence = sentence + details[key] + " ";
}

console.log(sentence);


// ==========================================
// EXERCISE 7 - SECRET GROUP
// ==========================================

console.log("\n===== EXERCISE 7 =====");

const names = [
    "Jack",
    "Philip",
    "Sarah",
    "Amanda",
    "Bernard",
    "Kyle"
];

let secretSociety = "";

for (let name of names) {

    secretSociety = secretSociety + name[0];
}


// Sort letters alphabetically

secretSociety = secretSociety
    .split("")
    .sort()
    .join("");


console.log(
    "Secret society:",
    secretSociety
);
