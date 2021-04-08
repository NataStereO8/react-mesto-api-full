const cardsRouter = require('express').Router();

const { createCard } = require('../controllers/cards');

cardsRouter.post('/cards', createCard);

const { getCards } = require('../controllers/cards');

cardsRouter.get('/cards', getCards);

const { deleteCard } = require('../controllers/cards');

cardsRouter.delete('/cards', deleteCard);

const { likeCard } = require('../controllers/cards');

cardsRouter.put('/cards/:cardId/likes', likeCard);

const { dislikeCard } = require('../controllers/cards');

cardsRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRouter;
