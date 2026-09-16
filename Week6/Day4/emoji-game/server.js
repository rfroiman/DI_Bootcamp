const express = require("express");
const path = require("path");
const emojis = require("./emojis");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(
    path.join(__dirname, "public")
));

// Score
let score = 0;

// Leaderboard
let leaderboard = [];

// Generate a new question
app.get("/api/question", (req, res) => {
    const randomIndex = Math.floor(
        Math.random() * emojis.length
    );

    const correctEmoji = emojis[randomIndex];

    const incorrectOptions = emojis
        .filter(item => item.name !== correctEmoji.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const options = [
        correctEmoji.name,
        ...incorrectOptions.map(item => item.name)
    ].sort(() => Math.random() - 0.5);

    res.json({
        emoji: correctEmoji.emoji,
        options: options,
        correctAnswer: correctEmoji.name
    });
});

// Check player's answer
app.post("/api/guess", (req, res) => {
    const { guess, correctAnswer } = req.body;

    if (guess === correctAnswer) {
        score++;

        res.json({
            correct: true,
            message: "Correct! 🎉",
            score: score
        });
    } else {
        res.json({
            correct: false,
            message: `Wrong! The correct answer was ${correctAnswer}.`,
            score: score
        });
    }
});

// Save score
app.post("/api/score", (req, res) => {
    const { name } = req.body;

    leaderboard.push({
        name: name,
        score: score
    });

    leaderboard.sort((a, b) => b.score - a.score);

    leaderboard = leaderboard.slice(0, 5);

    score = 0;

    res.json({
        message: "Score saved!",
        leaderboard: leaderboard
    });
});

// Get leaderboard
app.get("/api/leaderboard", (req, res) => {
    res.json(leaderboard);
});

app.listen(PORT, () => {
    console.log(
        `Emoji Game running on http://localhost:${PORT}`
    );
});