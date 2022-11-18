const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topicName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Topic', topicSchema);
