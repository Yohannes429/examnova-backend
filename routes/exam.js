const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');
const Result = require('../models/Result');

router.post('/save', async (req, res) => {
  await Exam.deleteMany();
  const exam = new Exam(req.body);
  await exam.save();
  res.json({ msg: 'Exam saved' });
});

router.get('/', async (req, res) => {
  const exam = await Exam.findOne();
  res.json(exam);
});

router.post('/submit', async (req, res) => {
  const result = new Result(req.body);
  await result.save();
  res.json({ msg: 'Result saved' });
});

router.get('/results', async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

module.exports = router;
