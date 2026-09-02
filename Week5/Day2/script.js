// ==========================================
// STAR WARS AJAX PROJECT
// ==========================================


// ==========================================
// GET ELEMENTS FROM DOM
// ==========================================

const findButton = document.getElementById("findButton");

const characterInfo = document.getElementById("characterInfo");

const loading = document.getElementById("loading");

const errorMessage = document.getElementById("error");


// ==========================================
// GET RANDOM CHARACTER
// ==========================================

async function getCharacter() {

    try {

        // Clear previous character

        characterInfo.innerHTML = "";

        errorMessage.classList.add("hidden");

        loading.classList.remove("hidden");


        // Generate random number between 1 and 83

        const randomId = Math.floor(Math.random() * 83) + 1;


        // Fetch character

        const response = await fetch(
            `https://www.swapi.tech/api/people/${randomId}`
        );


        if (!response.ok) {
            throw new Error("Character not found");
        }


        const data = await response.json();


        const character = data.result.properties;


        // ==========================================
        // GET HOMEWORLD
        // ==========================================

        const homeworldResponse = await fetch(character.homeworld);


        if (!homeworldResponse.ok) {
            throw new Error("Homeworld not found");
        }


        const homeworldData = await homeworldResponse.json();


        const homeworld = homeworldData.result.properties.name;


        // Hide loading

        loading.classList.add("hidden");


        // Display character

        displayCharacter(character, homeworld);


    } catch (error) {

        console.log(error);


        loading.classList.add("hidden");

        characterInfo.innerHTML = "";

        errorMessage.classList.remove("hidden");

    }

}


// ==========================================
// DISPLAY CHARACTER
// ==========================================

function displayCharacter(character, homeworld) {

    characterInfo.innerHTML = `
        <h2>${character.name}</h2>

        <p>
            <strong>Height:</strong>
            ${character.height}
        </p>

        <p>
            <strong>Gender:</strong>
            ${character.gender}
        </p>

        <p>
            <strong>Birth Year:</strong>
            ${character.birth_year}
        </p>

        <p>
            <strong>Home World:</strong>
            ${homeworld}
        </p>
    `;
}


// ==========================================
// BUTTON EVENT
// ==========================================

findButton.addEventListener("click", getCharacter);