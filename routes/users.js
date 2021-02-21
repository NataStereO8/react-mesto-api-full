const fsPromises = require('fs').promises;
const usersRouter = require('express').Router();

usersRouter.get('/users', (req, res) => {
  fsPromises.readFile('./data/users.json', { encoding: 'utf8' })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});
usersRouter.get('/users/:id', (req, res) => {
  fsPromises.readFile('./data/users.json', { encoding: 'utf8' })
    .then((data) => {
      const user = JSON.parse(data).find((item) => item._id === req.params.id);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = usersRouter;
