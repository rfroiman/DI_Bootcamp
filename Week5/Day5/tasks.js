"use strict";
function identity(value) {
    return value;
}
console.log(identity(42));
console.log(identity("Hello"));
function makePair(first, second) {
    return [first, second];
}
console.log(makePair(42, "Hello"));
console.log(makePair("TypeScript", 123));
function displayPerson(person) {
    return `${person.name} is ${person.age}`;
}
const person = { name: "Joe", age: 25, lastname: "Doe" };
console.log(displayPerson(person));
const article1 = {
    title: "My Article",
    content: "This is the content of my article."
};
const article2 = {
    title: "Another Article",
    content: {
        author: "Jane Doe",
        date: "2023-01-01"
    }
};
console.log(article1);
console.log(article2);
class MyClass {
    constructor(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    getTypes() {
        return `Type of item1: ${typeof this.item1}, Type of item2: ${typeof this.item2}`;
    }
}
const instance1 = new MyClass(42, "Hello");
console.log(instance1.getTypes());
const instance2 = new MyClass(true, { name: "Alice" });
console.log(instance2.getTypes());
const mixedData = [
    {
        type: "user",
        name: "Joe",
        age: 25
    },
    {
        id: 12345,
        price: 100,
        type: "product"
    },
    {
        type: "order",
        amount: 20000,
        orderId: "order123"
    }
];
function myhandleData(data) {
    for (const item of data) {
        if (item.type === "user") {
            console.log(`My name is ${item.name}, I am ${item.age} years old.`);
        }
        else if (item.type === "product") {
            console.log(`Product ID: ${item.id}, Price: ${item.price}`);
        }
        else if (item.type === "order") {
            console.log(`Order ID: ${item.orderId}, Amount: ${item.amount}`);
        }
        else {
            console.log("Unknown data type.");
        }
    }
}
myhandleData(mixedData);
