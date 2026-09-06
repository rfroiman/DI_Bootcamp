// ==========================================
// EXERCISE 1 - HELLO WORLD
// ==========================================

console.log("Hello, World!");



// ==========================================
// EXERCISE 2 - TYPE ANNOTATIONS
// ==========================================

let age: number = 25;
let Username: string = "Alice";

console.log(age);
console.log(Username);


// ==========================================
// EXERCISE 3 - UNION TYPES
// ==========================================

let id: string | number;

id = 123;
console.log(id);

id = "ABC123";
console.log(id);



// ==========================================
// EXERCISE 4 - IF...ELSE
// ==========================================

function checkNumber(num: number): string {

    if (num > 0) {

        return "Positive";

    } else if (num < 0) {

        return "Negative";

    } else {

        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));



// ==========================================
// EXERCISE 5 - TUPLE TYPES
// ==========================================

function getDetails(
    name: string,
    age: number
): [string, number, string] {

    const greeting =
        `Hello, ${name}! You are ${age} years old.`;

    return [name, age, greeting];
}

const details = getDetails("Alice", 25);

console.log(details);



// ==========================================
// EXERCISE 6 - OBJECT TYPE ANNOTATIONS
// ==========================================

type Person = {
    name: string;
    age: number;
};

function createPerson(
    name: string,
    age: number
): Person {

    return {
        name: name,
        age: age
    };
}

const person = createPerson("John", 30);

console.log(person);

// ==========================================
// EXERCISE 8 - SWITCH STATEMENT
// ==========================================

function getAction(role: string): string {

    switch (role) {

        case "admin":
            return "Manage users and settings";

        case "editor":
            return "Edit content";

        case "viewer":
            return "View content";

        case "guest":
            return "Limited access";

        default:
            return "Invalid role";
    }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));



// ==========================================
// EXERCISE 9 - FUNCTION OVERLOADING
// ==========================================

function greet(): string;

function greet(name: string): string;

function greet(name: string = "Guest"): string {

    if (name === "Guest") {

        return "Hello!";

    }

    return `Hello, ${name}!`;
}

console.log(greet());

console.log(greet("Alice"));