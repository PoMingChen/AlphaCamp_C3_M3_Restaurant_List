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
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  // res.send('Hello the initiation of restaurant list!')
  res.render('index', { restaurants: restaurantList})
})

// The route '/restaurant/:id' captures the id parameter from the URL
app.get('/restaurants/:id', (req, res) => {

  // The req.params.id is used to access the id parameter within the route handler.
  id = req.params.id
  // res.send(`The detail of restaurant ${id}`)
  restaurant = restaurantList.find(restaurant => restaurant.id.toString() === id)
  res.render('detail', { restaurant, id})
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})