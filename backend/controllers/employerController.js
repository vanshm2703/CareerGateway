const Job = require('../models/Job');
const Application = require('../models/Application');
const Notification = require('../models/Notification');
const User = require('../models/User');

const postJob = async (req, res) => {
  const { title, description } = req.body;

  try {
    const job = new Job({ employer: req.user._id, title, description });
    await job.save();

    const jobseekers = await User.find({ role: 'jobseeker' });
    for (const jobseeker of jobseekers) {
      const notification = new Notification({
        user: jobseeker._id,
        message: `New job posted: ${title}`,
      });
      await notification.save();
      // Send email notification logic here
    }

    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const manageApplications = async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId }).populate('jobseeker');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateApplicationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const application = await Application.findById(req.params.applicationId).populate('jobseeker');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    application.status = status;
    await application.save();

    const notification = new Notification({
      user: application.jobseeker._id,
      message: `Your application status for ${application.job.title} has been updated to ${status}`,
    });
    await notification.save();
    // Send email notification logic here

    res.json({ message: 'Application status updated', application });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { postJob, manageApplications, updateApplicationStatus };
