const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use(express.static('public'));

app.listen(PORT, () => {});

app.get('/*', (req, res) => {
  res.status(404);
  res.send('404', { message: 'Запрашиваемый ресурс не найден' });
});

app.post('/*', (req, res) => {
  res.status(404);
  res.send('404', { message: 'Запрашиваемый ресурс не найден' });
});
