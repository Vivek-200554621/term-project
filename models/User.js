const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // Add required email field
    password: { type: String, required: true }, // Hash this in production
});


const User = mongoose.model('User', userSchema);

module.exports = User;
