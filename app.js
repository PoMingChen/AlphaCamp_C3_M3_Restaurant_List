const express = require('express');
const app = express();
const port = 3000;
const restaurantList = require('./public/jsons/restaurant.json').results;

app.use(express.static('public'));


app.get('/', (req, res) => {
  // res.send('Hello the initiation of restaurant list!')
  res.redirect('/restaurant')
})

app.get('/restaurant', (req, res) => {
  res.send('Hello the initiation of restaurant list!')
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