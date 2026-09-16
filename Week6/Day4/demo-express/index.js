const express = require('express');
const app = express();

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


app.get('/users', (request, response) => {    
    response.json(users);
});

app.get('/user/:userID', (request, response) => {    
    response.json(users[request.params.userID - 1]);
});

app.get('/theme/:themeId/user/:userID', (request, response) => {    
    response.json({user: users[request.params.userID - 1], theme: themes[request.params.themeId]});
});

app.post('/welcome', (request, response) => {
    const newMessage = {
        title: request.body.title,
        message: request.body.message
    }
    response.status(201).json(newMessage);
})

app.put('/users/:userID', (request, response) => {
    const id = Number(request.params.userID);
    // Update the data
})

app.delete('/users/:userID', (request, response) => {
    const id = Number(request.params.userID);
    // Delete the data
})

app.get('/welcome/user/:userID', (request, response) => {
    const user = users[request.params.userID - 1];
    const personalizedWelcome = {
       message: `Welcome to our perfect server, ${user.name}!`
    };
    response.json(personalizedWelcome);
});