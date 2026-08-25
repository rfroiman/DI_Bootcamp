(function(userName) {

    let navbar = document.getElementById("navbar");

    let userDiv = document.createElement("div");

    let name = document.createElement("span");

    name.textContent = "Welcome " + userName;

    let picture = document.createElement("img");

    picture.src = "WhatsApp Image 2026-04-29 at 12.15.09.jpeg FOTO CV.jpeg";
    picture.width = 50;

    userDiv.appendChild(name);
    userDiv.appendChild(picture);

    navbar.appendChild(userDiv);

})("Rogério");