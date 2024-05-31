require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/contact', contactRouter);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

module.exports = app;
