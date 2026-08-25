function makeJuice(size) {

    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {

        ingredients.push(
            ingredient1,
            ingredient2,
            ingredient3
        );
    }

    function displayJuice() {

        let juice = document.getElementById("juice");

        juice.textContent =
            `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    }

    // Add 6 ingredients
    addIngredients("apple", "orange", "banana");

    addIngredients("mango", "strawberry", "pineapple");

    displayJuice();
}

makeJuice("large");