const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const port = 3000;
app.use(express.static("public"));


// INDEX
app.get('/pokemon', (req, res) => {
    res.render("index.ejs", { data: Pokemon});
});


// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});


// CREATE

app.post('/pokemon', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});


// UPDATE

app.put('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});


// DESTROY
app.delete('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});




// Express Web Server port - app.listen
app.listen(port, () => {
    console.log(`listening on port`, port)
});