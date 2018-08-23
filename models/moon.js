const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  planetId: {
    type: Schema.Types.ObjectId,
    ref: 'Planet',
    required: true
  },
  starId: {
    type: Schema.Types.ObjectId,
    ref: 'Star',
    required: true
  },
  galaxyId: {
    type: Schema.Types.ObjectId,
    ref: 'Galaxy',
    required: true
  }
});

module.exports = mongoose.model('Moon', schema);
