const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, required: true },
  photoUrl: { type: String }, // Store path to uploaded photo
  categories: [{ type: String }] // Array of categories
});

module.exports = mongoose.model('Event', eventSchema);
