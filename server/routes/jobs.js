'use strict';

/* validator */
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const Job = require('../models/job');

module.exports = app => {
    
const validator = [
    /* validations */
   // check('id', 'Invalid id must be a number').isNumeric(),
    check('name', 'Invalid name').isLength({ min: 1, max: 255 }).trim(),
    check('salary', 'Invalid salary').isNumeric(),
    check('area', 'Invalid area').isLength({ min: 1, max: 50 }).trim(),
    check('description', 'Invalid description').isLength({ min: 5, max: 255 }).trim(),
    check('skills', 'Invalid skills').isLength({ min: 1, max: 255 }).trim(),
    check('responsibilities', 'Invalid responsibilities').isLength({ min: 1, max: 255 }).trim(),
    check('isImpaired', 'Invalid field').isBoolean(),
    check('isActive', 'Invalid field').isBoolean()
];

const jobsCollection = app.config.firebaseConfig.collection('jobs');

/* get all jobs */
app.get('/jobs', async (req, res) => {
    
    try {

        let jobs = [];
        const docs = await jobsCollection.get();
        docs.forEach( doc => jobs.push(extractJob(doc)));
        return res.send(jobs);
    
    } catch (error) { return res.status(400).send('error') } 
        
});

/* post a job */
app.post('/jobs', validator , async (req ,res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) return res.status(422).send({ errors: errors.mapped() });

    /* no try catch because at this point everything is ok */
    
    /* const x = matchedData(req); */
    const fbReturn = await jobsCollection.doc().set(matchedData(req));

    if(fbReturn) return res.status(200).send('Ok');

    return res.status(422).send('error');

});

/* update a job by id  *incomplete */
app.put('/jobs/:id', async (req, res) => {

        try{ 
            await jobsCollection.doc(req.params.id).update(req.body);
            return res.status(200).send('Updated');
        }
         catch (error) {
            return res.status(400).send({ 'error' : 'No job to update' })
        }
});

/* delete a job by id  *incomplete */
app.delete('/jobs/:id', async (req, res) => {

    const result = await jobsCollection.doc(req.params.id).delete()
   
    return result ? res.status(400).send('Nothing to delete') : res.status(200).send("Ok") ;
});

/* get job by id */
app.get('/jobs/:id', async (req, res) =>{ 
    try {

        /* just return 1 because each document have his own id */
        const doc = await jobsCollection.doc(req.params.id).get();
    
        return res.send(extractJob(doc));

    } catch (error) {
        return res.status(400).send({ error : "Not found"})
    }
}); 

/* private methods */
const extractJob = (job) => {
    let v = job.data();
    return  {
    id : job.id, 
    name: v.name,
    description: v.description,
    skills :v.skills,
    area : v.area,
    responsibilities: v.responsibilities,
    salary: v.salary,
    isImpaired: v.isImpaired,
    isActive: v.isActive
    }
}

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