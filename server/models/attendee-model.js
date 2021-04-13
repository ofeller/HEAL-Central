const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Attendee = new Schema(
    {
        heal_event: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('attendees', Attendee)