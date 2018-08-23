const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String
});

module.exports = mongoose.model('Galaxy', schema);
