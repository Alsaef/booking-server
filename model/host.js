const mongoose = require('mongoose');
const validator = require('validator');

const hostSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: validator.isEmail, // Use validator to check for valid email format
      message: 'Invalid email format',
    },
  },
  imageUrl: {
    type: String,
    validate: {
      validator: validator.isURL, // Use validator to check for valid URL format
      message: 'Invalid URL format',
    },
  },
  contactNumber: {
    type: Number,
  },
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;
