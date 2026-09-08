function identity<T>(value: T): T {
    return value;
}

console.log(identity(42));
console.log(identity("Hello"));

function makePair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(makePair(42, "Hello"));
console.log(makePair("TypeScript", 123));

function displayPerson<T extends { name: string; age: number }>(person: T): string {
    return `${person.name} is ${person.age}`;
}

const person = { name: "Joe", age: 25, lastname: "Doe" };
console.log(displayPerson(person));

interface Article<T> {
    title: string;
    content: T;
}

const article1: Article<string> = {
    title: "My Article",
    content: "This is the content of my article."
};

const article2: Article<{}> = {
    title: "Another Article",
    content: {
        author: "Jane Doe",
        date: "2023-01-01"
    }
};

console.log(article1);
console.log(article2);

class MyClass<T, U> {
    item1: T;
    item2: U;

    constructor(item1: T, item2: U) {
        this.item1 = item1;
        this.item2 = item2;
    }
    getTypes(): string {
        return `Type of item1: ${typeof this.item1}, Type of item2: ${typeof this.item2}`;
    }   
}

const instance1 = new MyClass<number, string>(42, "Hello");
console.log(instance1.getTypes()); 

const instance2 = new MyClass<boolean, object>(true, { name: "Alice" });
console.log(instance2.getTypes());

type MyUser = {
    type: "user";
    name: string;
    age: number;
};

type MyProduct = {
    type: "product";
    id: number;
    price: number;
};

type MyOrder = {
    type: "order";
    orderId: string;
    amount: number;
};

const mixedData: (MyUser | MyProduct | MyOrder)[] = [
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
]

function myhandleData(
    data: (MyUser | MyProduct | MyOrder)[]
): void {

    for (const item of data) {

        if (item.type === "user") {

            console.log(
                `My name is ${item.name}, I am ${item.age} years old.`
            );

        } else if (item.type === "product") {

            console.log(
                `Product ID: ${item.id}, Price: ${item.price}`
            );

        } else if (item.type === "order") {

            console.log(
                `Order ID: ${item.orderId}, Amount: ${item.amount}`
            );

        } else {

            console.log("Unknown data type.");
        }
    }

    
}

myhandleData(mixedData);
