"use strict";
// ==========================================
// EXERCISE 1 - ACCESS MODIFIERS
// ==========================================
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return `${this.name} works as ${this.position}`;
    }
}
const employee = new Employee("Alice", 5000, "Developer", "IT");
console.log(employee.getEmployeeInfo());
// ==========================================
// EXERCISE 2 - READONLY PROPERTY
// ==========================================
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `${this.name} costs ${this.price}`;
    }
}
const product = new Product(1, "Laptop", 3500);
console.log(product.getProductInfo());
// This will give a TypeScript error:
// product.id = 2;
// ==========================================
// EXERCISE 3 - INHERITANCE
// ==========================================
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Animal sound";
    }
}
class Dog extends Animal {
    makeSound() {
        return "bark";
    }
}
const dog = new Dog("Buddy");
console.log(dog.name);
console.log(dog.makeSound());
// ==========================================
// EXERCISE 4 - STATIC METHODS
// ==========================================
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));
function printUserDetails(user) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
}
const premiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    membershipLevel: "Gold"
};
printUserDetails(premiumUser);
