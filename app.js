const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDB
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });
mongoose.connection
  .once('open', () => {
    console.log('Connection has been established!');
  })
  .on('error', error => {
    console.log('Connection error', error);
  });

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Import Route
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.listen(3000);
