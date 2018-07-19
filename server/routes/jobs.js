'use strict';

/* validator */
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
let jobs = require('../config/jobs');
const Job = require('../models/job');

module.exports = app => {
    
const validator = [
    /* validations */
    check('id', 'Invalid id must be a number').isNumeric(),
    check('name', 'Invalid name').isLength({ min: 1, max: 255 }).trim(),
    check('salary', 'Invalid salary').isNumeric(),
    check('area', 'Invalid area').isLength({ min: 1, max: 50 }).trim(),
    check('description', 'Invalid description').isLength({ min: 5, max: 255 }).trim(),
    check('skills', 'Invalid skills').isLength({ min: 1, max: 255 }).trim(),
    check('responsibilities', 'Invalid responsibilities').isLength({ min: 1, max: 255 }).trim(),
    check('isImpaired', 'Invalid field').isBoolean(),
    check('isActive', 'Invalid field').isBoolean()
];

/* get all jobs */
app.get('/jobs', async (req, res) => res.send(jobs));

/* post a job */
app.post('/jobs', validator , async (req ,res) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() });

    /* no try catch because at this point everything is ok */

     /* const x = matchedData(req); */
    const job = createJob(matchedData(req));
    jobs.push(job);
    return res.status(200).send('Ok');

});

/* update a job by id  *incomplete */
app.put('/jobs/:id', async (req, res) => {

    let index  = await jobs.findIndex( job => job.id == req.params.id);

    if(index >= 0){
         Object.keys(req.body).forEach( job => {
             jobs[index][job] = req.body[job];
         });

         return res.status(200).send('ok');
    }

    return res.send(400).json({ error : "Job not found"})
    res.send('put') 
});

/* delete a job by id  *incomplete */
app.delete('/jobs/:id', (req, res) => {
    const len = jobs.length;

    if(len > 0)
        jobs.splice(jobs.findIndex(job => job.id == req.params.id),1); /* to fix */

    if (len > jobs.length)
        return res.status(200).send('Ok'); 

    return res.status(400).send('Nothing to delete');
});

/* get job by id */
app.get('/jobs/:id', async(req, res) =>{ 
    try {

        /* the 'jobs' in the hero function is each element in jobs */
        let foundJobs = jobs.filter( (obj) => (obj.id == req.params.id) );

        return res.send(foundJobs);

    } catch (error) {
        return res.send.status(500).send("Internal error");
    }
}); 

/* private methods */

/* create a new job */
const createJob = (obj) => new Job(obj.id, 
    obj.name,
    obj.description,
    obj.skills,
    obj.area,
    obj.responsibilities,
    obj.salary,
    obj.isImpaired,
    obj.isActive);

}