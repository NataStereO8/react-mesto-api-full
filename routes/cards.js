const fsPromises = require('fs').promises;

const cardsRouter = require('express').Router();

cardsRouter.get('/cards', (req, res) => {
  fsPromises.readFile('./data/cards.json', { encoding: 'utf8' })
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

cardsRouter.patch('/cards', (req, res) => {
  res.status(404);
  res.send('404', { message: 'Запрашиваемый ресурс не найден' });
});

module.exports = cardsRouter;
