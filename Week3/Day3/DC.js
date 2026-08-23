// Get elements from HTML

let form = document.getElementById("libform");

let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");

let story = document.getElementById("story");

let shuffleButton = document.getElementById("shuffle");


// Form submit

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get input values

    let nounValue = noun.value;
    let adjectiveValue = adjective.value;
    let personValue = person.value;
    let verbValue = verb.value;
    let placeValue = place.value;


    // Check if inputs are empty

    if (
        nounValue === "" ||
        adjectiveValue === "" ||
        personValue === "" ||
        verbValue === "" ||
        placeValue === ""
    ) {

        alert("Please fill in all the fields.");

    } else {

        story.textContent =
            personValue +
            " went to " +
            placeValue +
            " with a " +
            adjectiveValue +
            " " +
            nounValue +
            " and decided to " +
            verbValue +
            ".";

    }

});


// BONUS - Shuffle stories

shuffleButton.addEventListener("click", function() {

    let nounValue = noun.value;
    let adjectiveValue = adjective.value;
    let personValue = person.value;
    let verbValue = verb.value;
    let placeValue = place.value;


    if (
        nounValue === "" ||
        adjectiveValue === "" ||
        personValue === "" ||
        verbValue === "" ||
        placeValue === ""
    ) {

        alert("Please fill in all the fields.");

    } else {

        let stories = [

            personValue +
            " found a " +
            adjectiveValue +
            " " +
            nounValue +
            " in " +
            placeValue +
            " and started to " +
            verbValue +
            ".",


            "One day, " +
            personValue +
            " went to " +
            placeValue +
            " to " +
            verbValue +
            " with a " +
            adjectiveValue +
            " " +
            nounValue +
            ".",


            "Everyone in " +
            placeValue +
            " was surprised when " +
            personValue +
            " decided to " +
            verbValue +
            " with a " +
            adjectiveValue +
            " " +
            nounValue +
            "."

        ];


        let randomNumber =
            Math.floor(Math.random() * stories.length);


        story.textContent = stories[randomNumber];

    }

});