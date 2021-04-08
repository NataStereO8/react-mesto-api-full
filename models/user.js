const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(val) {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        const res = regex.test(val);
        return res;
      },
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);