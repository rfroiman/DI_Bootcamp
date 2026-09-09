// ==========================================
// FRIDGE RESCUE
// ==========================================


// ==========================================
// API CONFIGURATION
// ==========================================

const API_URL =
    "https://www.themealdb.com/api/json/v1/1";


// ==========================================
// CACHE CONFIGURATION
// ==========================================

const CACHE_DURATION =
    24 * 60 * 60 * 1000;

const CACHE_VERSION =
    "V3";


// ==========================================
// TYPES / INTERFACES
// ==========================================

interface MealApiResponse {
    meals: any[] | null;
}

interface Recipe {
    id: string;
    name: string;
    image: string;
    category: string;
    area: string;
    instructions: string;
    ingredients: string[];
    measures: string[];
    matchScore: number;
    prepTime: number;
    availableIngredients: number;
    missingIngredients: number;
}

interface SearchCache {
    ingredients: string[];
    recipes: Recipe[];
    timestamp: number;
}


// ==========================================
// DOM ELEMENTS
// ==========================================

const ingredientInput =
    document.getElementById(
        "ingredientInput"
    ) as HTMLInputElement;

const searchButton =
    document.getElementById(
        "searchButton"
    ) as HTMLButtonElement;

const recipeGrid =
    document.getElementById(
        "recipeGrid"
    ) as HTMLDivElement;

const statusMessage =
    document.getElementById(
        "statusMessage"
    ) as HTMLDivElement;

const selectedIngredientsContainer =
    document.getElementById(
        "selectedIngredients"
    ) as HTMLDivElement;

const favoritesList =
    document.getElementById(
        "favoritesList"
    ) as HTMLDivElement;

const sortSelect =
    document.getElementById(
        "sortSelect"
    ) as HTMLSelectElement;

const recipeModal =
    document.getElementById(
        "recipeModal"
    ) as HTMLDivElement;

const modalBody =
    document.getElementById(
        "modalBody"
    ) as HTMLDivElement;

const closeModal =
    document.getElementById(
        "closeModal"
    ) as HTMLButtonElement;


// ==========================================
// APPLICATION DATA
// ==========================================

let selectedIngredients: string[] = [];

let recipes: Recipe[] = [];

let favorites: Recipe[] =
    JSON.parse(
        localStorage.getItem(
            "fridgeRescueFavorites"
        ) || "[]"
    );


// ==========================================
// NORMALIZE OLD FAVORITES
// ==========================================

function normalizeFavorites(): void {

    favorites =
        favorites.map(
            favorite => {

                return {
                    ...favorite,

                    prepTime:
                        favorite.prepTime || 30,

                    availableIngredients:
                        favorite.availableIngredients || 0,

                    missingIngredients:
                        favorite.missingIngredients || 0,

                    ingredients:
                        favorite.ingredients || [],

                    measures:
                        favorite.measures || [],

                    instructions:
                        favorite.instructions || ""
                };
            }
        );

    localStorage.setItem(
        "fridgeRescueFavorites",
        JSON.stringify(favorites)
    );
}


// ==========================================
// GET INGREDIENTS FROM INPUT
// ==========================================

function getIngredientsFromInput(): string[] {

    const ingredients =
        ingredientInput.value
            .split(",")
            .map(
                ingredient =>
                    ingredient
                        .trim()
                        .toLowerCase()
            )
            .filter(
                ingredient =>
                    ingredient !== ""
            );

    // Remove duplicate ingredients

    return [
        ...new Set(ingredients)
    ];
}


// ==========================================
// CREATE CACHE KEY
// ==========================================

function getCacheKey(
    ingredients: string[]
): string {

    const sortedIngredients =
        [...ingredients]
            .sort()
            .join("_");

    return (
        `fridgeRescueMealDB_${CACHE_VERSION}_`
        +
        sortedIngredients
    );
}


// ==========================================
// GET CACHED RECIPES
// ==========================================

function getCachedRecipes(
    ingredients: string[]
): Recipe[] | null {

    const cacheKey =
        getCacheKey(
            ingredients
        );

    const cachedData =
        localStorage.getItem(
            cacheKey
        );

    if (!cachedData) {
        return null;
    }

    try {

        const cache: SearchCache =
            JSON.parse(
                cachedData
            );

        const cacheAge =
            Date.now()
            -
            cache.timestamp;

        if (
            cacheAge <
            CACHE_DURATION
        ) {

            console.log(
                "Recipes loaded from cache."
            );

            return cache.recipes;
        }

        localStorage.removeItem(
            cacheKey
        );

        return null;

    } catch (error) {

        console.log(
            "Invalid cache.",
            error
        );

        localStorage.removeItem(
            cacheKey
        );

        return null;
    }
}


// ==========================================
// SAVE RECIPES TO CACHE
// ==========================================

function saveRecipesToCache(
    ingredients: string[],
    recipeResults: Recipe[]
): void {

    const cacheKey =
        getCacheKey(
            ingredients
        );

    const cache: SearchCache = {
        ingredients:
            [...ingredients],

        recipes:
            recipeResults,

        timestamp:
            Date.now()
    };

    localStorage.setItem(
        cacheKey,
        JSON.stringify(cache)
    );

    console.log(
        "Recipes saved to cache."
    );
}


// ==========================================
// SEARCH RECIPES
// ==========================================

async function searchRecipes(): Promise<void> {

    selectedIngredients =
        getIngredientsFromInput();

    if (
        selectedIngredients.length === 0
    ) {

        statusMessage.textContent =
            "Please enter at least one ingredient.";

        recipeGrid.innerHTML =
            "";

        return;
    }

    displaySelectedIngredients();


    // ======================================
    // CHECK CACHE
    // ======================================

    const cachedRecipes =
        getCachedRecipes(
            selectedIngredients
        );

    if (cachedRecipes) {

        recipes =
            cachedRecipes;

        sortRecipes(
            "match"
        );

        sortSelect.value =
            "match";

        statusMessage.textContent =
            "Results loaded from your previous search.";

        displayRecipes();

        return;
    }


    // ======================================
    // START API SEARCH
    // ======================================

    statusMessage.textContent =
        "Searching your fridge for possibilities...";

    recipeGrid.innerHTML =
        "";

    try {

        // ======================================
        // RECIPE CANDIDATE SCORE
        //
        // Instead of only storing recipe IDs,
        // we count how many ingredient searches
        // returned each recipe.
        //
        // Example:
        //
        // Recipe A found for:
        // chicken
        // rice
        // onion
        // tomato
        //
        // candidate score = 4
        //
        // Recipe B found only for:
        // chicken
        //
        // candidate score = 1
        // ======================================

        const candidateScores =
            new Map<string, number>();


        // ======================================
        // SEARCH EACH INGREDIENT
        // ======================================

        for (
            const ingredient
            of selectedIngredients
        ) {

            const response =
                await fetch(
                    `${API_URL}/filter.php?i=${encodeURIComponent(
                        ingredient
                    )}`
                );

            if (!response.ok) {

                throw new Error(
                    "Unable to connect to recipe API."
                );
            }

            const data:
                MealApiResponse =
                    await response.json();


            if (data.meals) {

                for (
                    const meal
                    of data.meals
                ) {

                    const currentScore =
                        candidateScores.get(
                            meal.idMeal
                        ) || 0;

                    candidateScores.set(
                        meal.idMeal,
                        currentScore + 1
                    );
                }
            }
        }


        // ======================================
        // NO RESULTS
        // ======================================

        if (
            candidateScores.size === 0
        ) {

            statusMessage.textContent =
                "No recipes found. Try different ingredients.";

            return;
        }


        // ======================================
        // RANK CANDIDATES
        //
        // Recipes appearing in more ingredient
        // searches are inspected first.
        // ======================================

        const rankedCandidates =
            Array.from(
                candidateScores.entries()
            )
                .sort(
                    (a, b) =>
                        b[1] - a[1]
                );


        // ======================================
        // INSPECT TOP 30 CANDIDATES
        //
        // Previously we simply inspected
        // the first 15 recipes returned.
        //
        // Now we inspect the 30 recipes
        // that matched the largest number
        // of ingredients.
        // ======================================

        const candidateIds =
            rankedCandidates
                .slice(
                    0,
                    30
                )
                .map(
                    candidate =>
                        candidate[0]
                );


        // ======================================
        // GET FULL RECIPE DETAILS
        // ======================================

        const recipePromises =
            candidateIds.map(
                id =>
                    getRecipeDetails(
                        id
                    )
            );

        const recipeResults =
            await Promise.all(
                recipePromises
            );


        recipes =
            recipeResults.filter(
                recipe =>
                    recipe !== null
            ) as Recipe[];


        // ======================================
        // CALCULATE REAL MATCH
        // ======================================

        calculateMatchScores();


        // ======================================
        // SORT BEST RECIPES
        // ======================================

        sortRecipes(
            "match"
        );


        // ======================================
        // KEEP ONLY TOP 10
        // ======================================

        recipes =
            recipes.slice(
                0,
                10
            );


        sortSelect.value =
            "match";


        // ======================================
        // SAVE TO CACHE
        // ======================================

        saveRecipesToCache(
            selectedIngredients,
            recipes
        );


        statusMessage.textContent =
            "";

        displayRecipes();


    } catch (error) {

        console.log(
            error
        );

        statusMessage.textContent =
            "Something went wrong while searching for recipes.";
    }
}


// ==========================================
// GET FULL RECIPE DETAILS
// ==========================================

async function getRecipeDetails(
    id: string
): Promise<Recipe | null> {

    const response =
        await fetch(
            `${API_URL}/lookup.php?i=${id}`
        );

    if (!response.ok) {
        return null;
    }

    const data:
        MealApiResponse =
            await response.json();

    if (!data.meals) {
        return null;
    }

    const meal =
        data.meals[0];

    const ingredients: string[] =
        [];

    const measures: string[] =
        [];


    // ======================================
    // THEMEALDB SUPPORTS
    // UP TO 20 INGREDIENTS
    // ======================================

    for (
        let i = 1;
        i <= 20;
        i++
    ) {

        const ingredient =
            meal[
                `strIngredient${i}`
            ];

        const measure =
            meal[
                `strMeasure${i}`
            ];

        if (
            ingredient &&
            ingredient.trim() !== ""
        ) {

            ingredients.push(
                ingredient.trim()
            );

            measures.push(
                measure
                    ? measure.trim()
                    : ""
            );
        }
    }


    // ======================================
    // ESTIMATE PREPARATION TIME
    // ======================================

    const prepTime =
        estimatePrepTime(
            ingredients.length,
            meal.strInstructions || ""
        );


    return {

        id:
            meal.idMeal,

        name:
            meal.strMeal,

        image:
            meal.strMealThumb,

        category:
            meal.strCategory,

        area:
            meal.strArea,

        instructions:
            meal.strInstructions || "",

        ingredients:
            ingredients,

        measures:
            measures,

        matchScore:
            0,

        prepTime:
            prepTime,

        availableIngredients:
            0,

        missingIngredients:
            ingredients.length
    };
}


// ==========================================
// ESTIMATE PREPARATION TIME
// ==========================================

function estimatePrepTime(
    ingredientCount: number,
    instructions: string
): number {

    const instructionSteps =
        instructions
            .split(
                /[.!?\n]+/
            )
            .filter(
                step =>
                    step.trim() !== ""
            )
            .length;


    let estimatedTime =
        10;


    // Ingredients complexity

    estimatedTime +=
        ingredientCount * 1.5;


    // Instruction complexity

    estimatedTime +=
        Math.min(
            instructionSteps * 2,
            30
        );


    // Round to nearest 5 minutes

    estimatedTime =
        Math.round(
            estimatedTime / 5
        ) * 5;


    if (
        estimatedTime < 15
    ) {
        estimatedTime =
            15;
    }


    if (
        estimatedTime > 90
    ) {
        estimatedTime =
            90;
    }


    return estimatedTime;
}


// ==========================================
// NORMALIZE INGREDIENT
// ==========================================

function normalizeIngredient(
    ingredient: string
): string {

    return ingredient
        .toLowerCase()
        .trim()
        .replace(
            /[^a-z0-9\s]/g,
            ""
        )
        .replace(
            /\s+/g,
            " "
        );
}


// ==========================================
// CHECK IF USER HAS INGREDIENT
// ==========================================

function userHasIngredient(
    recipeIngredient: string
): boolean {

    const normalizedRecipeIngredient =
        normalizeIngredient(
            recipeIngredient
        );


    return selectedIngredients.some(
        selectedIngredient => {

            const normalizedSelected =
                normalizeIngredient(
                    selectedIngredient
                );


            return (
                normalizedRecipeIngredient ===
                normalizedSelected

                ||

                normalizedRecipeIngredient.includes(
                    normalizedSelected
                )

                ||

                normalizedSelected.includes(
                    normalizedRecipeIngredient
                )
            );
        }
    );
}


// ==========================================
// CALCULATE FRIDGE RESCUE MATCH
// ==========================================

function calculateMatchScores(): void {

    for (
        const recipe
        of recipes
    ) {

        let available =
            0;


        // ======================================
        // COUNT AVAILABLE INGREDIENTS
        // ======================================

        for (
            const recipeIngredient
            of recipe.ingredients
        ) {

            if (
                userHasIngredient(
                    recipeIngredient
                )
            ) {

                available++;
            }
        }


        const totalIngredients =
            recipe.ingredients.length;


        const missingIngredients =
            totalIngredients
            -
            available;


        recipe.availableIngredients =
            available;


        recipe.missingIngredients =
            missingIngredients;


        // ======================================
        // MATCH SCORE
        //
        // Preparation time DOES NOT
        // change the Match Score.
        //
        // 0 missing = 100%
        // 1 missing = 95%
        // 2 missing = 90%
        // 3 missing = 85%
        // 4 missing = 80%
        // 5 missing = 75%
        // etc.
        // ======================================

        let ingredientScore =
            100
            -
            (
                missingIngredients
                *
                5
            );


        if (
            ingredientScore < 0
        ) {

            ingredientScore =
                0;
        }


        if (
            ingredientScore > 100
        ) {

            ingredientScore =
                100;
        }


        recipe.matchScore =
            ingredientScore;
    }
}


// ==========================================
// CHECK FAVORITE
// ==========================================

function isRecipeFavorite(
    id: string
): boolean {

    return favorites.some(
        favorite =>
            favorite.id === id
    );
}


// ==========================================
// DISPLAY RECIPES
// ==========================================

function displayRecipes(): void {

    recipeGrid.innerHTML =
        "";


    for (
        const recipe
        of recipes
    ) {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "recipe-card";


        const favoriteStatus =
            isRecipeFavorite(
                recipe.id
            );


        const visibleIngredients =
            recipe.ingredients
                .slice(
                    0,
                    3
                )
                .map(
                    ingredient =>
                        `<span>${ingredient}</span>`
                )
                .join("");


        let availabilityMessage =
            "";


        if (
            recipe.missingIngredients === 0
        ) {

            availabilityMessage =
                `You have all ${recipe.ingredients.length} ingredients`;

        } else {

            availabilityMessage = `

                You have
                ${recipe.availableIngredients}
                of
                ${recipe.ingredients.length}

                ·

                <span class="missing">

                    ${recipe.missingIngredients}
                    missing

                </span>

            `;
        }


        card.innerHTML = `

            <img
                class="recipe-image"
                src="${recipe.image}"
                alt="${recipe.name}"
            >

            <div class="match-badge">
                ${recipe.matchScore}% match
            </div>

            <button
                class="
                    favorite-button
                    ${favoriteStatus ? "active" : ""}
                "
                data-id="${recipe.id}"
                title="${
                    favoriteStatus
                        ? "Remove from favorites"
                        : "Add to favorites"
                }"
            >
                ${favoriteStatus ? "♥" : "♡"}
            </button>

            <div class="recipe-body">

                <h3>
                    ${recipe.name}
                </h3>

                <p class="recipe-description">

                    ${recipe.category}
                    ·
                    ${recipe.area}

                </p>

                <p class="recipe-availability">

                    ${availabilityMessage}

                </p>

                <div class="recipe-tags">

                    ${visibleIngredients}

                    ${
                        recipe.ingredients.length > 3

                        ?

                        `<span>
                            +${
                                recipe.ingredients.length - 3
                            } more
                        </span>`

                        :

                        ""
                    }

                </div>

                <div class="recipe-bottom">

                    <span class="prep-time">

                        <i
                            class="fa-regular fa-clock"
                        ></i>

                        ${recipe.prepTime} min

                    </span>

                    <button
                        class="viewRecipeButton"
                        data-id="${recipe.id}"
                    >

                        View Recipe →

                    </button>

                </div>

            </div>

        `;


        recipeGrid.appendChild(
            card
        );
    }


    addRecipeButtonEvents();
}


// ==========================================
// RECIPE CARD EVENTS
// ==========================================

function addRecipeButtonEvents(): void {

    const viewButtons =
        document.querySelectorAll(
            ".viewRecipeButton"
        );


    viewButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.getAttribute(
                            "data-id"
                        );

                    if (id) {

                        openRecipe(
                            id
                        );
                    }
                }
            );
        }
    );


    const favoriteButtons =
        document.querySelectorAll(
            ".favorite-button"
        );


    favoriteButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.getAttribute(
                            "data-id"
                        );

                    if (id) {

                        toggleFavorite(
                            id
                        );
                    }
                }
            );
        }
    );
}


// ==========================================
// OPEN RECIPE MODAL
// ==========================================

function openRecipe(
    id: string
): void {

    const recipe =
        recipes.find(
            recipe =>
                recipe.id === id
        )

        ||

        favorites.find(
            favorite =>
                favorite.id === id
        );


    if (!recipe) {
        return;
    }


    let ingredientsHTML =
        "";


    for (
        let i = 0;
        i < recipe.ingredients.length;
        i++
    ) {

        const ingredient =
            recipe.ingredients[i];


        const userHas =
            userHasIngredient(
                ingredient
            );


        ingredientsHTML += `

            <li>

                ${
                    recipe.measures[i]
                    || ""
                }

                ${ingredient}

                ${
                    userHas
                        ? " ✓"
                        : ""
                }

            </li>

        `;
    }


    const favoriteStatus =
        isRecipeFavorite(
            recipe.id
        );


    modalBody.innerHTML = `

        <img
            class="modal-recipe-image"
            src="${recipe.image}"
            alt="${recipe.name}"
        >

        <h2>
            ${recipe.name}
        </h2>

        <p>
            ${recipe.category}
            ·
            ${recipe.area}
        </p>

        <button
            id="modalFavoriteButton"
            style="
                margin-top: 15px;
                padding: 10px 16px;
                border: 1px solid #ef3d4d;
                border-radius: 8px;
                background: white;
                color: ${
                    favoriteStatus
                        ? "#ef3d4d"
                        : "#536b61"
                };
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
            "
        >

            <span
                id="modalFavoriteHeart"
                style="
                    color: ${
                        favoriteStatus
                            ? "#ef3d4d"
                            : "#536b61"
                    };
                    font-size: 20px;
                    margin-right: 7px;
                "
            >
                ${
                    favoriteStatus
                        ? "♥"
                        : "♡"
                }
            </span>

            <span id="modalFavoriteText">
                ${
                    favoriteStatus
                        ? "Saved to Favorites"
                        : "Add to Favorites"
                }
            </span>

        </button>

        <div class="modal-info">

            <span>

                <i
                    class="fa-regular fa-clock"
                ></i>

                ${recipe.prepTime} min

            </span>

            <span>
                ${recipe.matchScore}% match
            </span>

            <span>
                ${recipe.missingIngredients}
                ingredients missing
            </span>

        </div>

        <h3>
            Ingredients
        </h3>

        <ul>
            ${ingredientsHTML}
        </ul>

        <h3>
            Instructions
        </h3>

        <p class="instructions">
            ${recipe.instructions}
        </p>

    `;


    const modalFavoriteButton =
        document.getElementById(
            "modalFavoriteButton"
        ) as HTMLButtonElement;

    const modalFavoriteHeart =
        document.getElementById(
            "modalFavoriteHeart"
        ) as HTMLSpanElement;

    const modalFavoriteText =
        document.getElementById(
            "modalFavoriteText"
        ) as HTMLSpanElement;


    modalFavoriteButton.addEventListener(
        "click",
        () => {

            toggleFavorite(
                recipe.id,
                recipe
            );


            const nowFavorite =
                isRecipeFavorite(
                    recipe.id
                );


            if (nowFavorite) {

                modalFavoriteHeart.textContent =
                    "♥";

                modalFavoriteHeart.style.color =
                    "#ef3d4d";

                modalFavoriteText.textContent =
                    "Saved to Favorites";

                modalFavoriteButton.style.color =
                    "#ef3d4d";

            } else {

                modalFavoriteHeart.textContent =
                    "♡";

                modalFavoriteHeart.style.color =
                    "#536b61";

                modalFavoriteText.textContent =
                    "Add to Favorites";

                modalFavoriteButton.style.color =
                    "#536b61";
            }
        }
    );


    recipeModal
        .classList
        .remove(
            "hidden"
        );
}


// ==========================================
// FAVORITES
// ==========================================

function toggleFavorite(
    id: string,
    recipeToAdd?: Recipe
): void {

    const existingFavorite =
        favorites.find(
            favorite =>
                favorite.id === id
        );


    if (existingFavorite) {

        favorites =
            favorites.filter(
                favorite =>
                    favorite.id !== id
            );

    } else {

        const recipe =
            recipes.find(
                recipe =>
                    recipe.id === id
            )

            ||

            recipeToAdd;


        if (recipe) {

            favorites.push(
                recipe
            );
        }
    }


    localStorage.setItem(
        "fridgeRescueFavorites",
        JSON.stringify(favorites)
    );


    displayFavorites();

    displayRecipes();
}


// ==========================================
// DISPLAY FAVORITES
// ==========================================

function displayFavorites(): void {

    favoritesList.innerHTML =
        "";


    if (
        favorites.length === 0
    ) {

        favoritesList.innerHTML = `

            <span class="empty-text">
                No favorites yet.
            </span>

        `;

        return;
    }


    for (
        const favorite
        of favorites
    ) {

        const favoriteElement =
            document.createElement(
                "div"
            );


        favoriteElement.className =
            "favorite-mini";


        favoriteElement.innerHTML = `

            <img
                src="${favorite.image}"
                alt="${favorite.name}"
            >

            <strong>
                ${favorite.name}
            </strong>

            <span
                style="
                    margin-left: auto;
                    color: #ef3d4d;
                    font-size: 18px;
                "
            >
                ♥
            </span>

        `;


        favoriteElement.addEventListener(
            "click",
            () => {

                openRecipe(
                    favorite.id
                );
            }
        );


        favoritesList.appendChild(
            favoriteElement
        );
    }
}


// ==========================================
// DISPLAY SELECTED INGREDIENTS
// ==========================================

function displaySelectedIngredients(): void {

    selectedIngredientsContainer.innerHTML =
        "";


    if (
        selectedIngredients.length === 0
    ) {

        selectedIngredientsContainer.innerHTML = `

            <span class="empty-text">
                No ingredients selected.
            </span>

        `;

        return;
    }


    for (
        const ingredient
        of selectedIngredients
    ) {

        const chip =
            document.createElement(
                "span"
            );


        chip.className =
            "ingredient-chip";


        chip.innerHTML = `

            ${ingredient}

            <button>
                ×
            </button>

        `;


        const removeButton =
            chip.querySelector(
                "button"
            );


        removeButton?.addEventListener(
            "click",
            () => {

                selectedIngredients =
                    selectedIngredients.filter(
                        item =>
                            item !== ingredient
                    );


                ingredientInput.value =
                    selectedIngredients.join(
                        ", "
                    );


                displaySelectedIngredients();
            }
        );


        selectedIngredientsContainer
            .appendChild(
                chip
            );
    }
}


// ==========================================
// SORT RECIPES
// ==========================================

function sortRecipes(
    option: string
): void {

    // ======================================
    // BEST MATCH
    //
    // 1. Fewer missing ingredients
    // 2. Shorter preparation time
    // 3. Higher Match
    // ======================================

    if (
        option === "match"
    ) {

        recipes.sort(
            (a, b) => {

                if (
                    a.missingIngredients !==
                    b.missingIngredients
                ) {

                    return (
                        a.missingIngredients
                        -
                        b.missingIngredients
                    );
                }


                if (
                    a.prepTime !==
                    b.prepTime
                ) {

                    return (
                        a.prepTime
                        -
                        b.prepTime
                    );
                }


                return (
                    b.matchScore
                    -
                    a.matchScore
                );
            }
        );
    }


    // ======================================
    // SHORTEST PREP TIME
    // ======================================

    else if (
        option === "time"
    ) {

        recipes.sort(
            (a, b) => {

                if (
                    a.prepTime !==
                    b.prepTime
                ) {

                    return (
                        a.prepTime
                        -
                        b.prepTime
                    );
                }


                return (
                    a.missingIngredients
                    -
                    b.missingIngredients
                );
            }
        );
    }
}


// ==========================================
// EVENTS
// ==========================================

searchButton.addEventListener(
    "click",
    searchRecipes
);


ingredientInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            searchRecipes();
        }
    }
);


sortSelect.addEventListener(
    "change",
    () => {

        sortRecipes(
            sortSelect.value
        );

        displayRecipes();
    }
);


closeModal.addEventListener(
    "click",
    () => {

        recipeModal
            .classList
            .add(
                "hidden"
            );
    }
);


recipeModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            recipeModal
        ) {

            recipeModal
                .classList
                .add(
                    "hidden"
                );
        }
    }
);


// ==========================================
// INITIAL LOAD
// ==========================================

normalizeFavorites();

displayFavorites();