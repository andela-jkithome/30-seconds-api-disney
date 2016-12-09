// Get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Set up a mongoose model and export it
module.exports = mongoose.model('Category', new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },

  values: {
    type: Array,
    required: true
  },
}, {
  timestamps: true
}));
