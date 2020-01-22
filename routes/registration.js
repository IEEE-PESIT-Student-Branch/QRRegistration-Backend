const express = require("express");
const router = express.Router();

const {
  showUploadPage,
  insertAllData,
  getParticipants
} = require("../controllers/registration");

router
  .route("/")
  .get(showUploadPage)
  .post(insertAllData);

router.route("/participants").get(getParticipants);

module.exports = router;
