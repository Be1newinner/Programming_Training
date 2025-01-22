const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.query.byAge = function (value) {
    return this.where({ age: value })
}

// Export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
