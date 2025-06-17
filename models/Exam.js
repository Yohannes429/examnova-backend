const mongoose = require('mongoose');
const ExamSchema = new mongoose.Schema({
  questions: Array,
  timer: Number
});
module.exports = mongoose.model('Exam', ExamSchema);
