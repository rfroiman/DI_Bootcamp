// ==========================================
// RANDOM GIPHY PROJECT
// ==========================================

const form = document.getElementById("gifForm");

const categoryInput = document.getElementById("category");

const gifContainer = document.getElementById("gifContainer");

const deleteAllButton = document.getElementById("deleteAll");

// ==========================================
// FETCH RANDOM GIF
// ==========================================

async function getRandomGif(category) {

    try {

        const response = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${category}&rating=g`
        );


        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        const data = await response.json();


        // Get gif URL

        const gifUrl = data.data.images.original.url;

        // Create div for each gif

        const gifBox = document.createElement("div");

        // Create image

        const image = document.createElement("img");
        image.src = gifUrl;
        image.width = 300;

        // Create delete button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "DELETE";


        // Delete only this gif

        deleteButton.addEventListener("click", function () {

            gifBox.remove();

        });


        // Add image and button to div

        gifBox.appendChild(image);

        gifBox.appendChild(deleteButton);


        // Add div to page

        gifContainer.appendChild(gifBox);


    } catch (error) {

        console.log("Error:", error);

    }

}


// ==========================================
// FORM SUBMIT
// ==========================================

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const category = categoryInput.value;
    getRandomGif(category);
    categoryInput.value = "";
});


// ==========================================
// DELETE ALL GIFS
// ==========================================

deleteAllButton.addEventListener("click", function () {

    gifContainer.innerHTML = "";

});