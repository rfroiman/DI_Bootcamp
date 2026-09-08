"use strict";
// ==========================================
// EXERCISE 1 - INTERSECTION TYPES
// ==========================================
const personWithAddress = {
    name: "Alice",
    age: 30,
    street: "Main Street",
    city: "Tel Aviv"
};
console.log(personWithAddress);
// ==========================================
// EXERCISE 2 - TYPE GUARDS WITH UNION TYPES
// ==========================================
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    return "This is a string";
}
console.log(describeValue(10));
console.log(describeValue("Hello"));
// ==========================================
// EXERCISE 3 - TYPE CASTING
// ==========================================
let someValue = "TypeScript is great";
let stringValue = someValue;
console.log(stringValue.toUpperCase());
// ==========================================
// EXERCISE 4 - TYPE ASSERTIONS WITH UNION TYPES
// ==========================================
function getFirstElement(array) {
    const firstElement = array[0];
    return firstElement;
}
console.log(getFirstElement(["Hello", 10, "World"]));
console.log(getFirstElement(["TypeScript", 20]));
// ==========================================
// EXERCISE 5 - GENERIC CONSTRAINTS
// ==========================================
function logLength(value) {
    console.log(value.length);
}
logLength("Hello");
logLength([1, 2, 3, 4, 5]);
function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }
    if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    }
    return `${employee.name} works as ${employee.position}.`;
}
const employee1 = {
    name: "John",
    age: 40,
    position: "Manager",
    department: "Sales"
};
const employee2 = {
    name: "David",
    age: 28,
    position: "Developer",
    department: "IT"
};
const employee3 = {
    name: "Roger",
    age: 54,
    position: "Director",
    department: "Sales"
};
console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));
console.log(describeEmployee(employee3));
// ==========================================
// EXERCISE 7 - TYPE ASSERTIONS AND GENERIC CONSTRAINTS
// ==========================================
function formatInput(input) {
    const formattedInput = input.toString();
    return formattedInput;
}
console.log(formatInput(123));
console.log(formatInput("Hello"));
console.log(formatInput(true));
