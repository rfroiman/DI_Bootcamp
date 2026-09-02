// ==========================================
// EXERCISE 3 - ASYNC FUNCTION
// ==========================================

async function getStarship() {

    try {

        const response = await fetch(
            "https://www.swapi.tech/api/starships/9/"
        );


        // Check the response status

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        // Convert JSON to JavaScript Object

        const objectStarWars = await response.json();


        // Display result

        console.log(objectStarWars.result);


    } catch (error) {

        console.log("Error:", error);

    }
}


getStarship();