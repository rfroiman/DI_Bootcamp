import people from "./data.js";

function calculateAverageAge(persons) {
    let totalAge = 0;

    persons.forEach(person => {
        totalAge += person.age;
    });

    const averageAge = totalAge / persons.length;

    console.log(`Average age: ${averageAge}`);
}

calculateAverageAge(people);