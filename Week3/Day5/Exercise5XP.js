// Function Declaration

function kgToGrams(weight) {
    return weight * 1000;
}

console.log(kgToGrams(5));


// Function Expression

const convertKg = function(weight) {
    return weight * 1000;
};

console.log(convertKg(3));


// Difference:
// Function declarations can be called before they are defined,
// function expressions normally cannot.


// Arrow Function

const grams = weight => weight * 1000;

console.log(grams(2));