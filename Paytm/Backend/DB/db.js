const mongDB = require("mongoose");

mongDB.connect('mongodb+srv://admin:password1234@cluster0.86drtks.mongodb.net/paytm');

const userSchema = new mongDB.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },

    password: {
        type: String,
        required: true,
        minLength: 6,

    },

    firstName: {
        type: String,
        required: true,

        trim: true,
        maxLength: 50
    },

    lastName: {
        type: String,
        required: true,

        trim: true,
        maxLength: 50
    },
});

const accountSchema = new mongDB.Schema({
    userId: {
        type: mongDB.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongDB.model('User', userSchema);
const Account = mongDB.model('Account', accountSchema);

module.exports = {
    User,
    Account,
}