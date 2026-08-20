// Exercise 5

let container = document.getElementById("container");

console.log(container);


// Change Pete to Richard

let lists = document.querySelectorAll(".list");

lists[0].children[1].textContent = "Richard";


// Delete the second li of the second ul

lists[1].children[1].remove();


// Change first li of each ul to your name

for (let list of lists) {
    list.children[0].textContent = "Rogério";
}


// Add student_list to both ul

for (let list of lists) {
    list.classList.add("student_list");
}


// Add university and attendance to first ul

lists[0].classList.add("university");
lists[0].classList.add("attendance");


// Change div background and padding

container.style.backgroundColor = "lightblue";
container.style.padding = "20px";


// Don't display Dan

lists[1].children[1].style.display = "none";


// Add border to Richard

lists[0].children[1].style.border = "1px solid black";


// Change body font size

document.body.style.fontSize = "20px";


// Bonus

if (container.style.backgroundColor === "lightblue") {
    alert("Hello Rogério and Richard");
}