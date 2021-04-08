const express = require('express');
const mongoose = require('mongoose');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '606d961c3800db1dd8ad06d9',
  };
  next();
});

app.use(express.json());

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {});

app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
