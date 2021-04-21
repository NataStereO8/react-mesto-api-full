const BadRequestError = require('./errors/bad-request-err');
const Card = require('../models/card');
const NotFoundError = require('./errors/not-found-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError(err.message));
      }
      return next(err);
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Нет карточки с таким id');
      }
      if (!card.owner === req.user._id) {
        throw new BadRequestError('Вы не можете удалить карточку другого пользователя');
      }
      return card.remove()
        .then(() => res.send({}));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Неправильно указан ID'));
      }
      if (err.message === 'Элемент" по указанному ID не найден.') {
        return next(new NotFoundError('Элемент" по указанному ID не найден.'));
      }
      return next(err);
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Нет карточки с таким id');
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Неправильно указан ID'));
      }
      if (err.message === 'Элемент" по указанному ID не найден.') {
        return next(new NotFoundError('Элемент" по указанному ID не найден.'));
      }
      return next(err);
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Нет карточки с таким id');
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Неправильно указан ID'));
      }
      if (err.message === 'Элемент" по указанному ID не найден.') {
        return next(new NotFoundError('Элемент" по указанному ID не найден.'));
      }
      return next(err);
    });
};
