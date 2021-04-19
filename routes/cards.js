// const { celebrate, Joi } = require('celebrate');
const cardsRouter = require('express').Router();

const { createCard } = require('../controllers/cards');
const { getCards } = require('../controllers/cards');
const { deleteCard } = require('../controllers/cards');
const { likeCard } = require('../controllers/cards');
const { dislikeCard } = require('../controllers/cards');

cardsRouter.post('/cards', createCard);
cardsRouter.get('/cards', getCards);
cardsRouter.delete('/cards', deleteCard);
cardsRouter.put('/cards/:cardId/likes', likeCard);
cardsRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRouter;
