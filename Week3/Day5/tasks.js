// Analyze the code. What will be the output? Why?
// 1:

var num = 8;
var num = 10;

console.log("Exercise 1: " + num);

// 2:

let x = 1;
{
  let x = 2;
}
console.log("\nExercise 2: " + "x is", x);

// 3:

console.log("\nExercise 3:")
console.log(typeof 1);
console.log(typeof (1 + " Joe"));
console.log(typeof 1 + " Joe");

// 4:

console.log("\nExercise 4:")
console.log(typeof true);
console.log(typeof True);
console.log(typeof 1 == 1);

// 5

console.log("\nExercise 5:")
console.log(typeof 1);
console.log(typeof !1);
console.log(typeof !!"Hello");

// 6
console.log("\nExercise 6:")
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});