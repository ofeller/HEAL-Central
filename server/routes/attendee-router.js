const express = require('express')

const AttendeeCtrl = require('../controllers/attendee-ctrl')

const router = express.Router()

router.post('/attendee', AttendeeCtrl.createAttendee)
router.put('/attendee/:id', AttendeeCtrl.updateAttendee)
router.delete('/attendee/:id', AttendeeCtrl.deleteAttendee)
router.get('/attendee/:id', AttendeeCtrl.getAttendeeById)
router.get('/attendees', AttendeeCtrl.getAttendees)

module.exports = router