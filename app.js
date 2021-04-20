const express = require('express');
const mongoose = require('mongoose');
// const { requestLogger, errorLogger } = require('./middlewares/logger');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

require('dotenv').config();

app.use((req, res, next) => {
  req.user = {
    _id: '606d961c3800db1dd8ad06d9',
  };
  next();
});

app.use(express.json());

// app.use(requestLogger);

app.use('/', cardsRouter);
app.use('/', usersRouter);

// app.use(errorLogger);

app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

// app.use((err, req, res, next) => {
//   res.status(500).send({ message: 'На сервере произошла ошибка' });
// });

app.listen(PORT, () => {});
