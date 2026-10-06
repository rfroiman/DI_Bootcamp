const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, 'localhost', () => {
    console.log("We're online!")
});

app.get('/welcome', (request, response) => {
    const welcome = {
        title: "Hello everyone!",
        message: "Welcome to our perfect server!"
    };
    response.json(welcome);
});

const users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Mary"
    },
    {
        id: 3,
        name: "Nick"
    },
    {
        id: 4,
        name: "Bella"
    },
];

const themes = [
    {
        id: 1,
        title: "Spring"
    },
    {
        id: 2,
        title: "Light"
    },
    {
        id: 3,
        title: "Dark"
    },
];

// GET

app.get('/users', (request, response) => {    
    response.json(users);
});

app.get('/user/:userID', (request, response) => {    
    response.json(users[request.params.userID - 1]);
});

app.get('/theme/:themeId/user/:userID', (request, response) => {    
    response.json({user: users[request.params.userID - 1], theme: themes[request.params.themeId]});
});

// Task: Create a personalized welcome for every user
// User route parameters for endpoints
// welcome/user/1
// welcome/user/2
// welcome/user/3
// ....

app.get('/welcome/user/:userID', (request, response) => {   

    const welcomeMessage = "Hello " + users[request.params.userID - 1].name + "!";
    
    const welcome = {
        title: welcomeMessage,
        message: "Welcome to our perfect server!"
    };

    response.json(welcome);
});

// POST

app.post('/welcome', (request, response) => {
    const newMessage = {
        title: request.body.title,
        message: request.body.message
    }
    response.status(201).json(newMessage);
})

// PUT (Update the data)

app.put('/users/:userID', (request, response) => {
    const id = Number(request.params.userID);
    users[id - 1].id = request.body.id;
    users[id - 1].name = request.body.name;    
    response.json(request.body);

})

// DELETE (Delete the data)

app.delete('/users/:userID', (request, response) => {
    const id = Number(request.params.userID);
    const deletedUser = users.splice(id - 1, 1);
    response.json(deletedUser);
})

