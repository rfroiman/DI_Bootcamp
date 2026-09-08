// ==========================================
// EXERCISE 1 - INTERSECTION TYPES
// ==========================================

type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: "Alice",
    age: 30,
    street: "Main Street",
    city: "Tel Aviv"
};

console.log(personWithAddress);


// ==========================================
// EXERCISE 2 - TYPE GUARDS WITH UNION TYPES
// ==========================================

function describeValue(value: number | string): string {

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

let someValue: any = "TypeScript is great";

let stringValue = someValue as string;

console.log(stringValue.toUpperCase());


// ==========================================
// EXERCISE 4 - TYPE ASSERTIONS WITH UNION TYPES
// ==========================================

function getFirstElement(
    array: (number | string)[]
): string {

    const firstElement = array[0] as string;

    return firstElement;
}

console.log(getFirstElement(["Hello", 10, "World"]));
console.log(getFirstElement(["TypeScript", 20]));


// ==========================================
// EXERCISE 5 - GENERIC CONSTRAINTS
// ==========================================

function logLength<T extends { length: number }>(
    value: T
): void {

    console.log(value.length);
}

logLength("Hello");

logLength([1, 2, 3, 4, 5]);


// ==========================================
// EXERCISE 6 - INTERSECTION TYPES AND TYPE GUARDS
// ==========================================

type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {

    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }

    if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    }

    return `${employee.name} works as ${employee.position}.`;
}

const employee1: Employee = {
    name: "John",
    age: 40,
    position: "Manager",
    department: "Sales"
};

const employee2: Employee = {
    name: "David",
    age: 28,
    position: "Developer",
    department: "IT"
};

const employee3: Employee = {
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

function formatInput<T extends { toString(): string }>(
    input: T
): string {

    const formattedInput = input.toString() as string;

    return formattedInput;
}

console.log(formatInput(123));

console.log(formatInput("Hello"));

console.log(formatInput(true));