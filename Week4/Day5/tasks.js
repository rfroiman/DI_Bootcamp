let goodGrades = 83;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades > 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
});


endSemester.then(function (value) {
    console.log("I got an amazing gift : A ", value);
});

endSemester.catch(function (value) {
    console.log("Booo", value);
});

endSemester.finally(function () {
    console.log(`No matter if I get a gift or not, 
                I want to have good grades`);
});

console.log(endSemester)