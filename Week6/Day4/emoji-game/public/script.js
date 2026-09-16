const emojiElement =
    document.getElementById("emoji");

const optionsElement =
    document.getElementById("options");

const guessForm =
    document.getElementById("guessForm");

const feedbackElement =
    document.getElementById("feedback");

const scoreElement =
    document.getElementById("score");

const nextButton =
    document.getElementById("nextButton");

const playerName =
    document.getElementById("playerName");

const saveScoreButton =
    document.getElementById("saveScoreButton");

const leaderboardList =
    document.getElementById("leaderboardList");

let correctAnswer = "";

// Get a new question
async function getQuestion() {
    const response = await fetch("/api/question");

    const data = await response.json();

    emojiElement.textContent = data.emoji;

    correctAnswer = data.correctAnswer;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";

    data.options.forEach(option => {
        const label = document.createElement("label");

        label.className = "option";

        label.innerHTML = `
            <input
                type="radio"
                name="guess"
                value="${option}"
            >
            ${option}
        `;

        optionsElement.appendChild(label);
    });
}

// Submit guess
guessForm.addEventListener(
    "submit",
    async function(event) {
        event.preventDefault();

        const selectedOption =
            document.querySelector(
                'input[name="guess"]:checked'
            );

        if (!selectedOption) {
            feedbackElement.textContent =
                "Please select an answer.";

            return;
        }

        const response = await fetch(
            "/api/guess",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    guess: selectedOption.value,
                    correctAnswer: correctAnswer
                })
            }
        );

        const data = await response.json();

        feedbackElement.textContent =
            data.message;

        scoreElement.textContent =
            data.score;
    }
);

// Next question
nextButton.addEventListener(
    "click",
    getQuestion
);

// Save score
saveScoreButton.addEventListener(
    "click",
    async function() {
        const name = playerName.value.trim();

        if (!name) {
            alert("Please enter your name.");
            return;
        }

        const response = await fetch(
            "/api/score",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    name: name
                })
            }
        );

        const data = await response.json();

        scoreElement.textContent = "0";

        displayLeaderboard(
            data.leaderboard
        );

        playerName.value = "";

        getQuestion();
    }
);

// Display leaderboard
function displayLeaderboard(players) {
    leaderboardList.innerHTML = "";

    players.forEach(player => {
        const item =
            document.createElement("li");

        item.textContent =
            `${player.name} - ${player.score} points`;

        leaderboardList.appendChild(item);
    });
}

// Load leaderboard
async function loadLeaderboard() {
    const response =
        await fetch("/api/leaderboard");

    const data =
        await response.json();

    displayLeaderboard(data);
}

getQuestion();
loadLeaderboard();