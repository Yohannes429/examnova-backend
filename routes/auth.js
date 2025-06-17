const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { fullname, email, username, password, role } = req.body;
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ msg: 'Username exists' });

  const user = new User({ fullname, email, username, password, role });
  await user.save();
  res.json({ msg: 'Registered successfully' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).json({ msg: 'Invalid credentials' });
  res.json(user);
});

module.exports = router;
