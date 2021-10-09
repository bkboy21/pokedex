const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const methodOverride = require("method-override");
const Pokemon = require('./models/pokemon.js');
const port = 3000;
app.use(express.static("public"));

app.use(methodOverride('_method'));


// INDEX
app.get('/pokemon', (req, res) => {
    res.render("index.ejs", { data: Pokemon});
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
      app.put("/:id", (req, res) => {  
        pokemon.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          },
          (error, updatedBook) => {
            res.redirect(`/${req.params.id}`)
          }
        )
      })


// CREATE
app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body);
    res.redirect("/pokemon");
}); 


// Edit
app.get("/:id/edit", (req, res) => {
	pokemon.findById(req.params.id, (error, foundBook) => {
	  res.render("edit.ejs", {
		gData: foundBook,
	  })
	})
  })






// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});


// Express Web Server port - app.listen
app.listen(port, () => {
    console.log(`listening on port`, port)
});