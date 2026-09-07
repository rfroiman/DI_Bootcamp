function welcomeUser(
    name: string,
    greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}


console.log(
    welcomeUser("Alice", "Good morning")
);


console.log(
    welcomeUser("John")
);