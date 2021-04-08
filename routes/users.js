const usersRouter = require('express').Router();

const { createUser } = require('../controllers/users');

usersRouter.post('/users', createUser);

const { getUsers } = require('../controllers/users');

usersRouter.get('/users', getUsers);

const { getUser } = require('../controllers/users');

usersRouter.get('/users/:id', getUser);

const { updateUser } = require('../controllers/users');

usersRouter.patch('/users/me', updateUser);

const { updateAvatar } = require('../controllers/users');

usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
