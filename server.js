// adding npm i express //
const express = require('express');

// adding path //
const path = require('path');

// adding fs //
const fs = require('fs');

// adding app = express //
const app = express();

// adding PORT //
// process.env.PORT is for Heroku //
// 3000 is for local //
// Using || means if process.env.PORT is not available, use 3000 //
const PORT = process.env.PORT || 3000;

// adding middleware //
// urlencoded is for parsing data from html forms = x-www-form-urlencoded //
app.use(express.urlencoded({ extended: true }));
// json is for parsing data from html forms = json //
app.use(express.json());

// setting up public folder as a static folder //
app.use(express.static(path.join(__dirname, 'public')));

// setting up the routes for note pages //
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// setting up the routes for index page //
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// setting up the route for getting the saved note db/db.json //
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// setting up the route for posting the saved note db/db.json //
app.post('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), err => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// setting up the route for deleting the saved note db/db.json //
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        const notes = JSON.parse(data);
        const newNotes = notes.filter(note => note.id !== req.params.id);
        fs.writeFile(dbPath, JSON.stringify(newNotes), err => {
            if (err) return res.status(500).send(err);
            res.status(204).send();
        });
    });
});

// starting the server //
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

