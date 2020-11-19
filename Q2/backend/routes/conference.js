// importing the express
const express = require("express");

// initialising router
const router = express.Router();

// importing confrence controllers
const conferenceController = require('../controllers/conference');

// get request for get all conferences within sample_data.json
router.get('/', conferenceController.getconferences);

// post request to add new conference to sample_data.json
router.post('/', conferenceController.postconference)

// post request to add new attendee to conference in sample_data.json
router.post('/:room', conferenceController.postAttendeeToconference);

module.exports = router;