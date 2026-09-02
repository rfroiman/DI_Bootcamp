// ==========================================
// EXERCISE 1 - GIPHY API
// ==========================================

async function getGifs() {

    try {

        const response = await fetch(
            "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        );


        // Check the response status

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        // Convert response to JavaScript object

        const data = await response.json();


        // Display the object

        console.log(data);


    } catch (error) {

        console.log("Error:", error);

    }
}


getGifs();