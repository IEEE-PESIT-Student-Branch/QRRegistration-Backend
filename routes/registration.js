const express = require("express");
const router = express.Router();

const {
  showUploadPage,
  insertAllData,
  getParticipants,
  clearParticipants,
  updateData
} = require("../controllers/registration");

router
  .route("/")
  .get(showUploadPage)
  .post(insertAllData);

router
  .route("/participants")
  .get(getParticipants)
  .delete(clearParticipants);

router.route("/updatePerson").post(updateData);

module.exports = router;
