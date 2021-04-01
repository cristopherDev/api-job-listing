const { Router } = require('express');
const router = Router();

const {
    getAllJobs,
    createJob,
    updateJob,
    delJob
} = require('../controllers');

router
    .get('/', async (req, res) => {
        res.status(200).json({ message: 'server on!' });
    })
    .get('/jobs', getAllJobs)
    .post('/jobs', createJob)
    .patch('/jobs/:id', updateJob)
    .delete('/jobs/:id', delJob);

module.exports = router;
