const mongoose = require('mongoose');
const ResultSchema = new mongoose.Schema({
  username: String,
  score: Number,
  status: String,
  date: String,
  userAnswers: Array
});
module.exports = mongoose.model('Result', ResultSchema);
