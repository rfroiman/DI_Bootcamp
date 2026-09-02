//const myFetch = fetch("https://api.artic.edu/api/v1/artworks/4"); // PROMISE

//myFetch.then((response) => response.json().then((response) => console.log(response)));


async function getArtwork() {

    const response = await fetch("https://api.artic.edu/api/v1/artworks/4");

    const data = await response.json();

    console.log(data);
}

getArtwork();

