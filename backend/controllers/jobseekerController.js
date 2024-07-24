const Application = require('../models/Application');
const Notification = require('../models/Notification');
const Profile = require('../models/Profile');
const Job = require('../models/Job');

const applyForJob = async (req, res) => {
  const { jobId } = req.body;

  try {
    const application = new Application({
      job: jobId,
      jobseeker: req.user._id,
    });

    await application.save();

    const job = await Job.findById(jobId).populate('employer');
    const notification = new Notification({
      user: job.employer._id,
      message: `New application for your job: ${job.title}`,
    });
    await notification.save();
    // Send email notification logic here

    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      profile = new Profile({ user: req.user._id });
    }

    profile.resume = req.body.resume || profile.resume;
    // Update other profile fields

    await profile.save();

    res.json({ message: 'Profile updated successfully', profile });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { applyForJob, updateProfile };
