const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const methodOverride = require("method-override");
const Pokemon = require('./models/pokemon.js');
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
app.put("/pokemon/:id", (req, res) => {


    pokemon.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updated) => {
            res.redirect(`/pokemon/${req.params.id}`)
        }
    )
})


// CREATE
app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body);
    res.redirect("/pokemon");
});


// Edit
app.get("/pokemon/:id/edit", (req, res) => {
    pokemon.findById(req.params.id, (err, foundpoke) => {
        res.render("edit.ejs", {
            data: foundpoke,
        })
    })
})










// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});



// app.get('/books/:id', (req, res) => {
//     pokemon.findById(req.params.id, (err, foundpoke) => {
//         res.render('show.ejs', {
//             data: foundpoke,
//         });
//     });
// });






// Express Web Server port - app.listen
app.listen(port, () => {
    console.log(`listening on port`, port)
});