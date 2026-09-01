// Exercise 1
// Create a promise that resolves if a number is less than or equal to 10 and 
// rejects if it is greater than 10

function compareToTen(num) {

    return new Promise((resolve, reject) => {

        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }

    });
}


// Test - Reject

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Test - Resolve

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Exercise 2
// Create a promise that resolves after 4 seconds with the string "success"

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("success");

    }, 4000);

});


promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

//Exercise 3

const promiseResolve = Promise.resolve(3);

promiseResolve
    .then(result => console.log(result));


const promiseReject = Promise.reject("Boo!");

promiseReject
    .catch(error => console.log(error));