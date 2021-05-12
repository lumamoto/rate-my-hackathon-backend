
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    date_updated: {
      type: Date,
      default: Date.now
    }
});
  
const HackathonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reviews: {
    type: [ReviewSchema],
    default: []
  }, 
  url: {
    type: String,
    default: ""
  },
  themes: {
    type: [String],
    default: []
  },
  date_updated: {
    type: Date,
    default: Date.now
  },
});

module.exports = Hackathon = mongoose.model('hackathon', HackathonSchema);