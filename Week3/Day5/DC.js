let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};


// Exercise 1

const displayGroceries = () => {

    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });

};

displayGroceries();


// Exercise 2

const cloneGroceries = () => {

    // Pass by Value
    let user = client;

    client = "Betty";

    console.log("Client:", client);
    console.log("User:", user);

    // user is still "John" because strings are primitive values.
    // The value was copied.


    // Pass by Reference
    let shopping = groceries;

    groceries.totalPrice = "35$";

    console.log("Groceries price:", groceries.totalPrice);
    console.log("Shopping price:", shopping.totalPrice);

    // Both will show 35$ because shopping and groceries
    // reference the same object.


    groceries.other.paid = false;

    console.log("Groceries paid:", groceries.other.paid);
    console.log("Shopping paid:", shopping.other.paid);

    // Both will show false because they reference
    // the same object in memory.

};


// Exercise 3

cloneGroceries();