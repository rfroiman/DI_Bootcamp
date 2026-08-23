// Retrieve h1
let h1 = document.querySelector("h1");

console.log(h1);


// Retrieve article
let article = document.querySelector("article");


// Remove last paragraph
article.lastElementChild.remove();


// Change h2 background to red when clicked
let h2 = document.querySelector("h2");

h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});


// Hide h3 when clicked
let h3 = document.querySelector("h3");

h3.addEventListener("click", function() {
    h3.style.display = "none";
});


// Make all paragraphs bold
let button = document.getElementById("boldButton");

button.addEventListener("click", function() {

    let paragraphs = document.querySelectorAll("p");

    for (let paragraph of paragraphs) {
        paragraph.style.fontWeight = "bold";
    }
});


// BONUS - Random font size for h1
h1.addEventListener("mouseover", function() {

    let randomSize = Math.floor(Math.random() * 101);

    h1.style.fontSize = randomSize + "px";
});


// BONUS - Fade second paragraph
let paragraphs = document.querySelectorAll("p");

paragraphs[1].addEventListener("mouseover", function() {
    paragraphs[1].classList.add("fade");
});