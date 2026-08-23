// ==========================================
// PART I
// ==========================================

setTimeout(function () {

    alert("Hello World");

}, 2000);


// ==========================================
// PART II
// ==========================================

setTimeout(function () {

    let container = document.getElementById("container");

    let paragraph = document.createElement("p");

    paragraph.textContent = "Hello World";

    container.appendChild(paragraph);

}, 2000);


// ==========================================
// PART III
// ==========================================

let container = document.getElementById("container");

let button = document.getElementById("clear");


let interval = setInterval(function () {

    let paragraph = document.createElement("p");

    paragraph.textContent = "Hello World";

    container.appendChild(paragraph);


    // Stop when there are 5 paragraphs

    if (container.children.length >= 5) {

        clearInterval(interval);

    }

}, 2000);


// Stop when the button is clicked

button.addEventListener("click", function () {

    clearInterval(interval);

});