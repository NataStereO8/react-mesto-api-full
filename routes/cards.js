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

module.exports = cardsRouter;
