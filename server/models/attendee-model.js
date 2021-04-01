const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Attendee = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        ufl_email: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('attendees', Attendee)