const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  color: {
    type: String,
    enum: ['red', 'yellow', 'blue', 'orange', 'white', 'black'],
    required: true
  },
  galaxyId: {
    type: Schema.Types.ObjectId,
    ref: 'Galaxy',
    required: true
  }
});

module.exports = mongoose.model('Star', schema);
