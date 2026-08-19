//using 1 loop

console.log("Exercise - Star Pattern");

let stars = "";

for (let i = 1; i <= 6; i++) {
    stars = stars + "* ";
    console.log(stars);
}

// using nested for loops

console.log("Exercise - Nested For Loops");

for (let i = 1; i <= 6; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars = stars + "* ";
    }

    console.log(stars);
}