const express = require("express");
const {
  postJob,
  manageApplications,
  updateApplicationStatus,
} = require("../controllers/employerController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/jobs", authMiddleware, postJob);
router.get(
  "/jobs/:jobId/applications",
  authMiddleware("employer"),
  manageApplications,
);
router.put(
  "/applications/:applicationId",
  authMiddleware("employer"),
  updateApplicationStatus,
);

module.exports = router;
