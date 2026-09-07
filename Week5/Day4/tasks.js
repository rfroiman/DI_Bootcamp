"use strict";
function welcomeUser(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(welcomeUser("Alice", "Good morning"));
console.log(welcomeUser("John"));
