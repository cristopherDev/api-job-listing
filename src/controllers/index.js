const Jobs = require('../models/jobs');

const getAllJobs = async (req, res) => {
    try {
        var jobs = await Jobs.find();

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const createJob = async (req, res) => {
    try {
        const { job } = req.body;

        var newJob = new Jobs(job);

        await newJob.save();

        res.status(200).json(newJob);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { job } = req.body;

        var updateJob = await Jobs.updateOne({ _id: id }, job, { multi: false });

        res.status(200).json(updateJob);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const delJob = async (req, res) => {
    try {
        const { id } = req.params;

        await Jobs.deleteOne({ _id: id });

        res.status(200).json({ delete: true });
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    getAllJobs,
    createJob,
    updateJob,
    delJob
}
