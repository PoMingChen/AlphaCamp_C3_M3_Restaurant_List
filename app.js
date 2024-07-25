const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const restaurantList = require('./public/jsons/restaurant.json').results;

app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'));


app.get('/', (req, res) => {
  // res.send('Hello the initiation of restaurant list!')
  res.redirect('/restaurant')
})

app.get('/restaurant', (req, res) => {
  // res.send('Hello the initiation of restaurant list!')
  res.render('index', { restaurant: restaurantList})
})

// The route '/restaurant/:id' captures the id parameter from the URL
app.get('/restaurant/:id', (req, res) => {

  // The req.params.id is used to access the id parameter within the route handler.
  id = req.params.id
  res.send(`The detail of restaurant ${id}`)
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})