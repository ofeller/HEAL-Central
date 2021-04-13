const Attendee = require('../models/attendee-model')

createAttendee = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide your information',
        })
    }

    const attendee = new Attendee(body)

    if (!attendee) {
        return res.status(400).json({ success: false, error: err })
    }

    attendee
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: attendee._id,
                message: 'Attendee created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Attendee not created!',
            })
        })
}

updateAttendee = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Attendee.findOne({ _id: req.params.id }, (err, attendee) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Attendee not found!',
            })
        }
        attendee.heal_event = body.heal_event
        attendee.first_name = body.first_name
        attendee.last_name = body.last_name
        attendee.email = body.email
        attendee
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: attendee._id,
                    message: 'Attendee updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Attendee not updated!',
                })
            })
    })
}

deleteAttendee = async (req, res) => {
    await Attendee.findOneAndDelete({ _id: req.params.id }, (err, attendee) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!attendee) {
            return res
                .status(404)
                .json({ success: false, error: `Attendee not found` })
        }

        return res.status(200).json({ success: true, data: attendee })
    }).catch(err => console.log(err))
}

getAttendeeById = async (req, res) => {
    await Attendee.findOne({ _id: req.params.id }, (err, attendee) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: attendee })
    }).catch(err => console.log(err))
}

getAttendees = async (req, res) => {
    await Attendee.find({}, (err, attendees) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!attendees.length) {
            return res
                .status(404)
                .json({ success: false, error: `Attendee not found` })
        }
        return res.status(200).json({ success: true, data: attendees })
    }).catch(err => console.log(err))
}

module.exports = {
    createAttendee,
    updateAttendee,
    deleteAttendee,
    getAttendees,
    getAttendeeById,
}