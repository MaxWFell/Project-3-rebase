const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 14,
        },
        email: {
            type: String,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
    },

);


const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;