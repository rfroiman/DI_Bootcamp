"use strict";
// ==========================================
// DAILY CHALLENGE - TYPE GUARD WITH UNION TYPES
// ==========================================
function handleData(data) {
    const results = [];
    for (const item of data) {
        if (item.type === "user") {
            results.push(`Hello ${item.name}, you are ${item.age} years old.`);
        }
        else if (item.type === "product") {
            results.push(`Product ID: ${item.id}, Price: ${item.price}`);
        }
        else if (item.type === "order") {
            results.push(`Order ID: ${item.orderId}, Amount: ${item.amount}`);
        }
        else {
            results.push("Unknown data type.");
        }
    }
    return results;
}
// ==========================================
// TEST DATA
// ==========================================
const data = [
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
