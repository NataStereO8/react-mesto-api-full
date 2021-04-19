const User = require('../models/user');
const bcrypt = require('bcryptjs'); // импортируем bcrypt

exports.createUser = (req, res) => {
  // хешируем пароль
  bcrypt.hash(req.body.password, 10)
    .then(hash => User.create({
      email: req.body.email,
      password: hash, // записываем хеш в базу
    }))
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
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

module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.user.name, about: req.user.abut } },
    { new: true },
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

module.exports.updateAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { avatar: req.user.avatar } },
    { new: true },
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};
