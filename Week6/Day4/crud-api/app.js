const express = require("express");

const {
    fetchPosts
} = require("./data/dataService");

const app = express();
const PORT = 5000;

app.get("/posts", async (req, res) => {
    try {
        const posts = await fetchPosts();

        console.log(
            "Posts successfully retrieved."
        );

        res.json(posts);
    } catch (error) {
        console.error(
            "Error retrieving posts:",
            error.message
        );

        res.status(500).json({
            message: "Error retrieving posts"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});