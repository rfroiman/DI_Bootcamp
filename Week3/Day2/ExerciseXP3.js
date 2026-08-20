// Exercise 3

function changeEnough(itemPrice, amountOfChange) {

    let quarters = amountOfChange[0];
    let dimes = amountOfChange[1];
    let nickels = amountOfChange[2];
    let pennies = amountOfChange[3];

    let total =
        quarters * 0.25 +
        dimes * 0.10 +
        nickels * 0.05 +
        pennies * 0.01;

    if (total >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));