const Participant = require("../models/registration");

// @desc    Render Upload Page
// @route   GET /registration/
// @access  Public
exports.showUploadPage = (req, res, next) => {
  res.render("csv");
};

// @desc    Insert data to DB from CSV
// @route   POST /registration/
// @access  Private
exports.insertAllData = (req, res, next) => {
  // console.log(req.body);
  var n = req.body.count;
  var arr = [];
  for (i = 0; i < n; i++) {
    arr.push(0);
  }

  req.body.info.forEach(async e => {
    var participant = await Participant.create({
      id: e.id,
      name: e.name,
      scan: arr
    });
    console.log({ id: e.id, name: e.name, scan: arr });
  });

  res.send(JSON.stringify(req.body));
  //   res.send("POSTed");
};

exports.getParticipants = async (req, res, next) => {
  console.log("Getting List...");
  try {
    const participants = await Participant.find();
    res.status(200).json({success: true, data: participants});
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
