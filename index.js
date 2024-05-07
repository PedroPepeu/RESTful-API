var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(cors())
let users = [];

app.get('/', (req, res) => {
    res.send('Hello from express server!');
});

app.listen(
    PORT,
    () => console.log(`Hosted in http://localhost:${PORT}`)
);

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users: Create a new user
app.post('/users', (req, res) => {
    const { username, email, password } = req.body; // Extract user data
    if (!username || !email || !password) {
        return res.status(400).send('Missing required fields');
    }

    const newUser = { id: users.length + 1, username, email, password }; // Generate ID
    users.push(newUser);
    res.status(201).json(newUser); // Created (201) status with created user
});

// GET /users/:id: Retrieve a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// PUT /users/:id: Update an existing user
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }

    const updatedUser = { ...users[userIndex], ...req.body }; // Update existing user object
    users[userIndex] = updatedUser;
    res.json(updatedUser);
});

// DELETE /users/:id: Delete a user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }

    users.splice(userIndex, 1); // Remove user from array
    res.status(204).send(); // No Content (204) on successful deletion
});