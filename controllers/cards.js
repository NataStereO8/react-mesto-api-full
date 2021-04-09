const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.send('Nice');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Неправильно указан ID' });
        return;
      }
      if (err.message === 'Элемент" по указанному ID не найден.') {
        res.status(404).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Неправильно указан ID' });
        return;
      }
      if (err.message === 'Элемент" по указанному ID не найден.') {
        res.status(404).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Неправильно указан ID' });
        return;
      }
      if (err.message === 'Элемент" по указанному ID не найден.') {
        res.status(404).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};
