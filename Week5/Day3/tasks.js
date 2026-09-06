"use strict";
// function calculateSumTS(a: number, b: number): number {
//   return a + b;
// }
// console.log(calculateSumTS(100, 2));
// console.log(calculateSumTS("100", 3));
// console.log(calculateSumTS(undefined, 1));
// const val1 = "Hello";
// const val2 = 11.2;
// const val3 = true;
// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(greet("John")); // Output: Hello, John!
// console.log(greet("Jane")); // Output: Hello, Jane!
const point = [3, 4, 12];
function distanceFromOrigin(point) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const distance = Math.sqrt(x ** 2 +
        y ** 2 +
        z ** 2);
    return distance;
}
const result = distanceFromOrigin(point);
console.log("Distance from origin:", result);
