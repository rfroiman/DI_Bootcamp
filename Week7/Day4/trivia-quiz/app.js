const express = require("express");
const quizRouter = require("./routes/quiz");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/quiz", quizRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});