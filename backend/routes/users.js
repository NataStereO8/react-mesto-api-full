const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validatorLib = require('validator');

const { getUsers } = require('../controllers/users');
const { getUser } = require('../controllers/users');
const { getUserInfo } = require('../controllers/users');
const { updateUser } = require('../controllers/users');
const { updateAvatar } = require('../controllers/users');

const validateUri = (value, helpers) => {
  if (validatorLib.isURL(value, { require_protocol: true })) return value;
  return helpers.error('any.invalid');
};

usersRouter.get('/users', getUsers);
usersRouter.get('/users/me', getUserInfo);
usersRouter.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
}), getUser);
usersRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);
usersRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(validateUri),
  }),
}), updateAvatar);

module.exports = usersRouter;
