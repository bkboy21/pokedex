const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const methodOverride = require("method-override");

const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// INDEX
app.get('/pokemon', (req, res) => {
    res.render("index.ejs", { data: pokemon });
});



// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});




// Delete
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});






// update
app.put('/pokemon/:id', (req, res) => {
pokemon[req.params.id] = req.body;
  res.redirect('/pokemon');
});


// CREATE
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");
});


// Edit
app.get("/pokemon/:id/edit", (req, res) => {
    console.log(pokemon[req.params.id])
    res.render('edit.ejs', { data: pokemon[req.params.id] });
});


// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: pokemon[req.params.id] });
});








// Express Web Server port - app.listen
app.listen(port, () => {
    console.log(`listening on port`, port)
});