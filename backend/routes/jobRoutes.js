const express = require('express');
const { getAllJobs } = require('../controllers/jobController');

const router = express.Router();

router.get('/jobs', getAllJobs);

module.exports = router;
