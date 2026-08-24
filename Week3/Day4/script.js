// script.js

const colorsContainer = document.getElementById("colors");
const board = document.getElementById("board");
const clearButton = document.getElementById("clear");


// -------------------------
// COLORS
// -------------------------

const colors = [
  "red",
  "orange",
  "yellow",

  "green",
  "lightgreen",
  "lime",

  "cyan",
  "blue",
  "darkblue",

  "purple",
  "violet",
  "pink",

  "brown",
  "black",
  "gray",

  "white",
  "gold",
  "salmon"
];

let selectedColor = "red";


// Create the color palette

colors.forEach(function(color) {

  const colorSquare = document.createElement("div");

  colorSquare.classList.add("color");

  colorSquare.style.backgroundColor = color;


  colorSquare.addEventListener("click", function() {

    selectedColor = color;


    // remove selected class from all colors

    const allColors =
      document.querySelectorAll(".color");

    allColors.forEach(function(item) {

      item.classList.remove("selected");

    });


    // mark selected color

    colorSquare.classList.add("selected");

  });


  colorsContainer.appendChild(colorSquare);

});


// -------------------------
// DRAWING BOARD
// -------------------------

let mouseDown = false;


// Detect when mouse button is pressed

document.addEventListener("mousedown", function() {

  mouseDown = true;

});


// Detect when mouse button is released

document.addEventListener("mouseup", function() {

  mouseDown = false;

});


// Create squares

for (let i = 0; i < 1500; i++) {

  const square = document.createElement("div");

  square.classList.add("square");


  // Paint with one click

  square.addEventListener("mousedown", function() {

    square.style.backgroundColor =
      selectedColor;

  });


  // Paint while dragging

  square.addEventListener("mouseover", function() {

    if (mouseDown === true) {

      square.style.backgroundColor =
        selectedColor;

    }

  });


  board.appendChild(square);

}


// -------------------------
// CLEAR BUTTON
// -------------------------

clearButton.addEventListener("click", function() {

  const squares =
    document.querySelectorAll(".square");


  squares.forEach(function(square) {

    square.style.backgroundColor = "white";

  });

});