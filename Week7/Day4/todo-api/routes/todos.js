const express = require("express");

const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get("/", (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post("/", (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.task = req.body.task;
    todo.completed = req.body.completed;

    res.json(todo);
});

// Delete a to-do item by ID
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    const deletedTodo = todos.splice(index, 1);

    res.json({
        message: "Todo deleted",
        todo: deletedTodo[0]
    });
});

module.exports = router;