"use strict";
class MyEmployee {
    constructor(name, lastName, salary, position) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.position = position;
    }
    greeting() {
        return `My name is ${this.name} ${this.lastName} my role is ${this.position}`;
    }
}
const Itemployee = new MyEmployee("John", "Doe", 15000, "Developer");
console.log(Itemployee.greeting());
