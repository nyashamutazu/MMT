// importing the express
const fs = require("fs");
// importing the sample_data.json
const data = require("../data/sample_data.json");

exports.getconferences = (req, res, next) => {
  // If data is empty
  if (typeof data === undefined || data === null) {
    // Return failed response
    return res.status(500).json({
      status: 500,
      message: "Failed to get conference data"
    });
  }

  // Return success response with data
  return res.status(200).json({
    status: 200,
    message: "Successfully got conference data",
    data
  });
};

exports.postAttendeeToconference = (req, res, next) => {
  const response = data.reduce((prev, curr) => {
    if (curr.room === req.room) {
      return false;
    }
    return prev && true;
  }, true)

  if (!response) {
    return res.status(500).json({
      status: 500,
      message: "Failed to find conference room"
    });
  }

  // create an attendee object from requested body
  const attendee = {
    name: req.body.attendee.name,
    company: req.body.attendee.company,
    email: req.body.attendee.email,
    registered: new Date.now()
  };

  // Loop through inital data and append attendee if conference room is equal to requested conference
  const new_data = data.map(conference => {
    if (conference.room === req.room) {
      return {
        ...conference,
        attendees: [...conference.attendees, attendee]
      };
    }

    return conference;
  });

  // json = JSON.stringify(new_data);
  // Update sample_data.json with new attendee
  fs.writeFile(data_path, new_data, "utf8", err => {
    // If error respond with failed response
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "Failed to add attendee to conference"
      });
    }

  // Return success response
    return res.status(200).json({
      status: 200,
      message: "Successfully added attendee to conference"
    });
  });
};

exports.postconference = (req, res, next) => {
    // create a new conference object from requested body
  const conference = {
    title: req.body.conference.title,
    abstract: req.body.conference.abstract,
    room: req.body.conference.room,
    speaker: req.body.conference.speaker,
    attendees: []
  };

  // appened/ push conference to new current sample_data.json
  const new_data = data.push(conference);

  // json = JSON.stringify(new_data);

  // Update sample_data.json with new conference
  fs.writeFile(data_path, new_data, "utf8", err => {
        // If error respond with failed response
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "Failed to add conference"
      });
    }

  // Return success response
    return res.status(200).json({
      status: 200,
      message: "Successfully added conference"
    });
  });
};
