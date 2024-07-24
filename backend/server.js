require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const employerRoutes = require('./routes/employerRoutes');
const jobRoutes = require('./routes/jobRoutes');
const jobseekerRoutes = require('./routes/jobseekerRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();


// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors()); 

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/employer', employerRoutes);
app.use('/api', jobRoutes);
app.use('/api/jobseeker', jobseekerRoutes);
app.use('/api', notificationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
