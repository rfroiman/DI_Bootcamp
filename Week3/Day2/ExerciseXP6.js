// Exercise 6

let navBar = document.getElementById("navBar");


// Change id

navBar.setAttribute("id", "socialNetworkNavigation");


// Find the ul

let ul = navBar.querySelector("ul");


// Create new li

let newLi = document.createElement("li");


// Create text

let logoutText = document.createTextNode("Logout");


// Add text to li

newLi.appendChild(logoutText);


// Add li to ul

ul.appendChild(newLi);


// Get first and last li

let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;


// Display their text

console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);