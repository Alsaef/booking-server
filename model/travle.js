const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const validator = require('validator');

const travelPlaceSchema = mongoose.Schema({
  travleName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  location: {
      type: String,
      require: true,
  },
  imageUrl: {
    type: String,
    validate: {
      validator: validator.isURL, // Use validator to check for a valid URL format
      message: 'Invalid URL format',
    },
  },
  host: {
    name: {
      type: String,
      require: true,
    },
    id: {
      type: ObjectId,
      ref: 'User',
    },
  },
  price: {
    type: Number,
    require: true,
  },

  // Fields for trip dates
  tripStartDate: {
    type: Date,
    require: true,
  },
  tripEndDate: {
    type: Date,
    require: true,
  },
  view: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const TravelPlace = mongoose.model('TravelPlace', travelPlaceSchema);
module.exports = TravelPlace;


