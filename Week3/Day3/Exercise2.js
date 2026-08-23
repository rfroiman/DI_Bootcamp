// Retrieve form
let form = document.querySelector("form");

console.log(form);


// Retrieve inputs by id
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");

console.log(firstName);
console.log(lastName);


// Retrieve inputs by name
let firstNameByName = document.querySelector('[name="firstname"]');
let lastNameByName = document.querySelector('[name="lastname"]');

console.log(firstNameByName);
console.log(lastNameByName);


// Submit event
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    let firstValue = firstName.value;
    let lastValue = lastName.value;


    if (firstValue !== "" && lastValue !== "") {

        let ul = document.querySelector(".usersAnswer");

        let firstLi = document.createElement("li");
        firstLi.textContent = firstValue;

        let lastLi = document.createElement("li");
        lastLi.textContent = lastValue;

        ul.appendChild(firstLi);
        ul.appendChild(lastLi);
    }
});