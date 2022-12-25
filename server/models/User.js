const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    AuthID: {
        type: String,
        required: true,
    },
    family_name: {
        type: String,
        required: true,
    },
    given_name: {
        type: String,
        required: true,
    },
    locale: {
        type: String,
        required: false,
    },
    locations: {
        type: Array,
        required: false,
    },
    favourites: {
        type: Array,
        required: false,
    }
})

const User = model('user', UserSchema)

module.exports = User