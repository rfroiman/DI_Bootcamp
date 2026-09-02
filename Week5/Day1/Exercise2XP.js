// ==========================================
// EXERCISE 2 - GIPHY API
// ==========================================

async function getSunGifs() {

    try {

        const response = await fetch(
            "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        );


        // Check the response status

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        // Convert JSON to JavaScript Object

        const data = await response.json();


        // Display the object

        console.log(data);


    } catch (error) {

        console.log("Error:", error);

    }
}


getSunGifs();