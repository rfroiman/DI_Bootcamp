// ==========================================
// EXERCISE 1 - LOCATION
// ==========================================

const person = {
    name: "John Doe",
    age: 25,
    location: {
        country: "Canada",
        city: "Vancouver",
        coordinates: [49.2827, -123.1207]
    }
};

const {
    name,
    location: {
        country,
        city,
        coordinates: [lat, lng]
    }
} = person;

console.log(
    `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Output:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// ==========================================
// EXERCISE 2 - DISPLAY STUDENT INFO
// ==========================================

function displayStudentInfo(objUser) {

    const { first, last } = objUser;

    return `Your full name is ${first} ${last}`;
}

console.log(
    displayStudentInfo({
        first: "Elie",
        last: "Schoppik"
    })
);

// Output:
// Your full name is Elie Schoppik


// ==========================================
// EXERCISE 3 - USER & ID
// ==========================================

const users = {
    user1: 18273,
    user2: 92833,
    user3: 90315
};


// Part 1

const usersArray = Object.entries(users);

console.log(usersArray);

// Output:
// [
//   ["user1", 18273],
//   ["user2", 92833],
//   ["user3", 90315]
// ]


// Part 2

const doubleIds = usersArray.map((user) => {

    return [
        user[0],
        user[1] * 2
    ];

});

console.log(doubleIds);

// Output:
// [
//   ["user1", 36546],
//   ["user2", 185666],
//   ["user3", 180630]
// ]


// ==========================================
// EXERCISE 4 - PERSON CLASS
// ==========================================

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person("John");

console.log(typeof member);

// Output:
// object


// ==========================================
// EXERCISE 5 - DOG CLASS
// ==========================================

class Dog {
    constructor(name) {
        this.name = name;
    }
}


// Correct answer: OPTION 2

class Labrador extends Dog {

    constructor(name, size) {

        super(name);

        this.size = size;
    }
}

const dog = new Labrador("Max", "large");

console.log(dog.name);
console.log(dog.size);


// ==========================================
// EXERCISE 6 - CHALLENGES
// ==========================================


// Part 1

console.log([2] === [2]);
// false

console.log({} === {});
// false

// Arrays and objects are compared by reference.
// These are different objects in memory.


// ==========================================
// Part 2 - Objects and References
// ==========================================

const object1 = {
    number: 5
};

const object2 = object1;

const object3 = object2;

const object4 = {
    number: 5
};


object1.number = 4;


console.log(object2.number);
// 4

console.log(object3.number);
// 4

console.log(object4.number);
// 5

// object1, object2 and object3 point to the same object.
// object4 is a different object.


// ==========================================
// Part 3 - ANIMAL AND MAMMAL CLASSES
// ==========================================

class Animal {

    constructor(name, type, color) {

        this.name = name;
        this.type = type;
        this.color = color;
    }
}


class Mammal extends Animal {

    constructor(name, type, color) {

        super(name, type, color);
    }


    sound(animalSound) {

        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}


const farmerCow = new Mammal(
    "Lily",
    "cow",
    "brown and white"
);


console.log(
    farmerCow.sound("Moooo")
);

// Output:
// Moooo I'm a cow, named Lily and I'm brown and white