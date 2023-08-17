var express = require("express");
const router = express.Router();
// const { createJobType, allJobsType } = require("../controllers/jobTypeController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { createJob, singleJob, updateJob, showJobs } = require("../controllers/jobsController");



//job types routes

// /api/job/create
router.post('/job/create', isAuthenticated, isAdmin ,createJob)

// /api/job/id
router.get('/job/:id', singleJob)

// /api/job/update/:job_id
router.put('/job/update/:job_id',isAuthenticated, isAdmin, updateJob)
 
// /api/jobs/show
router.get('/jobs/show', showJobs)
 




module.exports = router;
