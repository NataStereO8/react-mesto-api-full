const { celebrate, Joi } = require('celebrate');
const validatorLib = require('validator');
const cardsRouter = require('express').Router();

const { createCard } = require('../controllers/cards');
const { getCards } = require('../controllers/cards');
const { deleteCard } = require('../controllers/cards');
const { likeCard } = require('../controllers/cards');
const { dislikeCard } = require('../controllers/cards');

const validateUri = (value, helpers) => {
  if (validatorLib.isURL(value, { require_protocol: true })) return value;
  return helpers.error('any.invalid');
};

cardsRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().custom(validateUri),
  }),
}), createCard);
cardsRouter.get('/cards', getCards);
cardsRouter.delete('/cards/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
}), deleteCard);
cardsRouter.put('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
}), likeCard);
cardsRouter.delete('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
}), dislikeCard);

module.exports = cardsRouter;
