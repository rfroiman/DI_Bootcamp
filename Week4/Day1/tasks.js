//const numbers = [10, 11, 12, 15, 20];

//numbers.forEach((number) => {
//    if (number % 2 === 0) {
//        console.log(number);
//    }
//});

//const myArray = [1, 2, 3, 4, 5]

//for (let i = 0; i < myArray.length; i++) {
//    myArray[i]++
//}

//console.log(myArray)

const numbers = [10, 11, 12, 15, 20];
let sum = 0;

numbers.forEach((number) => {
    if (number % 2 !== 0) {
        console.log(number);
        sum = sum + number;
    }
});

console.log(sum);

let result = 0;
const mySumFunction = item => result += item % 2 === 1 ? item : 0;
numbers.forEach(mySumFunction);
console.log(result);

const myMapFunction = item => item % 2 === 1 ? "odd" : "even";
const a = numbers.map(myMapFunction);
console.log(a);

const myFilterFunction = item => item % 2 === 1;
const b = numbers.filter(myFilterFunction);
console.log(b);

const myFilterFunction1 = item => item > 12 || item < 11;
const c = numbers.filter(myFilterFunction1);
console.log(c);

const myReduceFunction = (acumulator, item) => acumulator += item % 2 === 1 ? item : 0;
console.log(numbers.reduce(myReduceFunction, 0));

const myReduceFunction1 = (multi, item) => item % 2 === 1 ?  multi * item : multi;
console.log(numbers.reduce(myReduceFunction1, 1));