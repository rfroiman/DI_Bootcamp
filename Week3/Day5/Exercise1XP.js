// ==========================================
// EXERCISE 1 - SCOPE
// ==========================================


// #1
function funcOne() {
    let a = 5;

    if (a > 1) {
        a = 3;
    }

    alert(`inside the funcOne function ${a}`);
}

funcOne();

// Prediction:
// a will be 3 because a starts as 5 and then is changed to 3.

// If const was used:
// Error, because const cannot be reassigned.



// ==========================================
// #2
// ==========================================

let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree(); // 0
funcTwo();
funcThree(); // 5

// Prediction:
// First alert = 0
// After funcTwo changes a, second alert = 5

// If const was used:
// funcTwo would cause an error because const cannot be reassigned.



// ==========================================
// #3
// ==========================================

function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive();

// Prediction:
// hello
// window.a creates a global variable in the browser.



// ==========================================
// #4
// ==========================================

let a = 1;

function funcSix() {
    let a = "test";

    alert(`inside the funcSix function ${a}`);
}

funcSix();

// Prediction:
// test
// The local a inside the function is used.

// If const was used:
// Same result because a is not reassigned.



// ==========================================
// #5
// ==========================================

let a = 2;

if (true) {
    let a = 5;

    alert(`in the if block ${a}`);
}

alert(`outside of the if block ${a}`);

// Prediction:
// Inside block = 5
// Outside block = 2

// If const was used:
// Same result because both variables are in different scopes.