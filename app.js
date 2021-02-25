const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use(express.static('public'));

app.listen(PORT, () => {});

app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
