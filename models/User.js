const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  username: String,
  password: String,
  role: String
});
module.exports = mongoose.model('User', UserSchema);
