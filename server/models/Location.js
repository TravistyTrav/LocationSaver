const { Schema, model } = require('mongoose')

const LocationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    hours: {
        type: Array,
        required: false,
    },
    price: {
        type: String,
        required: false,
    },
    rating: {
        type: String,
        required: false,
    },
    reviews: {
        type: Array,
        required: false,
    },
    place_id: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: false,
    }
})

const Location = model('location', LocationSchema)

module.exports = Location