// ==========================================
// DAILY CHALLENGE - TYPE GUARD WITH UNION TYPES
// ==========================================

type User = {
    type: "user";
    name: string;
    age: number;
};

type Product = {
    type: "product";
    id: number;
    price: number;
};

type Order = {
    type: "order";
    orderId: string;
    amount: number;
};


function handleData(
    data: (User | Product | Order)[]
): string[] {

    const results: string[] = [];

    for (const item of data) {

        if (item.type === "user") {

            results.push(
                `Hello ${item.name}, you are ${item.age} years old.`
            );

        } else if (item.type === "product") {

            results.push(
                `Product ID: ${item.id}, Price: ${item.price}`
            );

        } else if (item.type === "order") {

            results.push(
                `Order ID: ${item.orderId}, Amount: ${item.amount}`
            );

        } else {

            results.push("Unknown data type.");
        }
    }

    return results;
}


// ==========================================
// TEST DATA
// ==========================================

const data: (User | Product | Order)[] = [

    {
        type: "user",
        name: "Alice",
        age: 30
    },

    {
        type: "product",
        id: 101,
        price: 250
    },

    {
        type: "order",
        orderId: "ORD123",
        amount: 500
    }
];


console.log(handleData(data));