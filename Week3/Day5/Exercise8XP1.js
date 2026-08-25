function makeJuice(size) {

    function addIngredients(ingredient1, ingredient2, ingredient3) {

        let juice = document.getElementById("juice");

        juice.textContent =
            `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }

    addIngredients("apple", "orange", "banana");
}

makeJuice("large");