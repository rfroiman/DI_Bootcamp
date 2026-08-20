// Exercise 4

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(function(resolve) {
        rl.question(question, function(answer) {
            resolve(answer);
        });
    });
}

async function hotelCost() {

    let nights;

    while (true) {

        nights = await ask("How many nights would you like to stay? ");

        nights = Number(nights);

        if (!isNaN(nights) && nights > 0) {
            break;
        }

        console.log("Please enter a valid number.");
    }

    return nights * 140;
}

async function planeRideCost() {

    let destination;

    while (true) {

        destination = await ask("What is your destination? ");

        if (destination !== "" && isNaN(destination)) {
            break;
        }

        console.log("Please enter a destination.");
    }

    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

async function rentalCarCost() {

    let days;

    while (true) {

        days = await ask("How many days would you like to rent the car? ");

        days = Number(days);

        if (!isNaN(days) && days > 0) {
            break;
        }

        console.log("Please enter a valid number.");
    }

    let cost = days * 40;

    if (days > 10) {
        cost = cost * 0.95;
    }

    return cost;
}

async function totalVacationCost() {

    let hotel = await hotelCost();
    let plane = await planeRideCost();
    let car = await rentalCarCost();

    let total = hotel + plane + car;

    console.log("Hotel cost: $" + hotel);
    console.log("Plane tickets: $" + plane);
    console.log("Car rental: $" + car);
    console.log("Total vacation cost: $" + total);
}

totalVacationCost().then(function() {
    rl.close();
});