const express = require("express");
const triviaQuestions = require("../models/trivia");

const router = express.Router();

let currentQuestion = 0;
let score = 0;

// Start the quiz
router.get("/", (req, res) => {
    currentQuestion = 0;
    score = 0;

    res.json({
        questionNumber: currentQuestion + 1,
        question: triviaQuestions[currentQuestion].question
    });
});

// Submit an answer
router.post("/", (req, res) => {
    const userAnswer = req.body.answer;

    if (!userAnswer) {
        return res.status(400).json({
            message: "Please provide an answer."
        });
    }

    const correctAnswer = triviaQuestions[currentQuestion].answer;

    let feedback;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        feedback = "Correct!";
    } else {
        feedback = `Incorrect! The correct answer is ${correctAnswer}.`;
    }

    currentQuestion++;

    if (currentQuestion >= triviaQuestions.length) {
        return res.json({
            feedback: feedback,
            message: "Quiz finished! Go to /quiz/score to see your score."
        });
    }

    res.json({
        feedback: feedback,
        nextQuestionNumber: currentQuestion + 1,
        nextQuestion: triviaQuestions[currentQuestion].question
    });
});

// Display the final score
router.get("/score", (req, res) => {
    res.json({
        score: score,
        totalQuestions: triviaQuestions.length
    });
});

module.exports = router;