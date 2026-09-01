// ==========================================
// DAILY CHALLENGE 1 - PROMISES
// ==========================================


// ==========================================
// FUNCTION 1 - makeAllCaps()
// ==========================================

function makeAllCaps(words) {

    return new Promise((resolve, reject) => {

        const allStrings = words.every((word) => typeof word === "string");

        if (allStrings) {

            const upperWords = words.map((word) => word.toUpperCase());

            resolve(upperWords);

        } else {

            reject("Error: All elements must be strings.");
        }
    });
}


// ==========================================
// FUNCTION 2 - sortWords()
// ==========================================

function sortWords(words) {

    return new Promise((resolve, reject) => {

        if (words.length > 4) {

            resolve(words.sort());

        } else {

            reject("Error: The array must contain more than 4 words.");
        }
    });
}


// ==========================================
// TEST 1
// Contains a number
// makeAllCaps() rejects
// ==========================================

makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


// ==========================================
// TEST 2
// Only 3 words
// sortWords() rejects
// ==========================================

makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


// ==========================================
// TEST 3
// Everything works
// ==========================================

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));