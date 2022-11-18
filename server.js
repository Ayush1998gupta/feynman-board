const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const topicRoutes = require('./routes/topics');

// error controller
const errorController = require('./controllers/error');
const topics = require('./controllers/topics');
// design file
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
// body parsering
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(topicRoutes);

app.get('/', topics.getTopics);

app.use(errorController.get404);

//database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gexk8id.mongodb.net/csv?retryWrites=true&w=majority`
  )
  .then(() => console.log('database connected successfully'))
  .catch((err) => console.log('error connecting to mongodb', err));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
