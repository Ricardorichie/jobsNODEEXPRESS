const express = require("express");
const router = express.Router();
const {
  createJobs,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJobs);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
