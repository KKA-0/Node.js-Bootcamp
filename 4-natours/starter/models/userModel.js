const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Name Should be there!']
        },
        email: {
            type: String,
            require: [true, 'E-mail Should be there!'],
            unique: true,
            lowercase: true,
            validator: [validator.isEmail, 'Email is not Valid!']
        },
        photo: String,
        password: {
            type: String,
            require: [true, 'Password Should be there!'],
            minlength: 8
        },
        confirmPassword: {
            type: String,
            require: [true, 'Passwords not matching!']
        }

    }
);
const User  = mongoose.model('user', userSchema);
module.exports = User;