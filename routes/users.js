const usersRouter = require('express').Router();
// const { celebrate, Joi } = require('celebrate');

const { createUser } = require('../controllers/users');
const { getUsers } = require('../controllers/users');
const { getUser } = require('../controllers/users');
const { updateUser } = require('../controllers/users');
const { updateAvatar } = require('../controllers/users');

usersRouter.post('/users', createUser);
usersRouter.get('/users', getUsers);
usersRouter.get('/users/:id', getUser);
usersRouter.patch('/users/me', updateUser);
usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
