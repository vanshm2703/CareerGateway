const express = require('express');
const { applyForJob, updateProfile } = require('../controllers/jobseekerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/applications', authMiddleware('jobseeker'), applyForJob);
router.put('/profile', authMiddleware('jobseeker'), updateProfile);

module.exports = router;
