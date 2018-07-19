
/* requires */
const express = require('express');
let jobs = require('./config/jobs');
const Job = require('./models/job');

/* validator */
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const validator = [
    /* validations */
    check('id', 'Invalid id must be a number').isNumeric(),
    check('name', 'Invalid name').isLength({ min: 1, max: 255 }).trim(),
    check('salary', 'Invalid salary').isNumeric(),
    check('area', 'Invalid area').isLength({ min: 1, max: 50 }).trim(),
    check('description', 'Invalid description').isLength({ min: 5, max: 255 }).trim(),
    check('skills', 'Invalid name').isLength({ min: 1, max: 255 }).trim(),
    check('responsibilities', 'Invalid name').isLength({ min: 1, max: 255 }).trim(),
    check('isImpaired', 'Invalid name').isBoolean(),
    check('isActive', 'Invalid name').isBoolean()
];

const port = 3000;
const app = express();

const bodyParser = require('body-parser');

/* app */
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

/* home */
app.get('/', async(req, res) => res.send('VJobs work'));

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
    return res.send('Job Added');

})

/* update a job by id  *incomplete */
app.put('jobs/:id', validator , async (req, res) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped()})

    let index  = await jobs.findIndex( job => job.id == req.params.id);

    if(index > 0){
        /* change the value */
    }

    return res.send(400).json({ error : "not found"})
    res.send('put') 
});

/* delete a job by id  *incomplete */
app.delete('/jobs/:id', (req, res) => res.send('delete'));

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

/* app */
app.listen( port, () => console.log(`Server listening on port ${ port }`));

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


            /* other way to post a job */
 /* app.post('/jobs', async (req, res) => {
    try {
        // validator 
        req.check('id', 'Invalid id must be a number').isNumeric();
        req.check('name', 'Invalid name').isLength({ min: 1, max: 255 });
        req.check('salary', 'Invalid name').isLength({ min: 1, max: 255 });


        const errors = req.validationErrors();
        if(!errors){

            const jobs_length = jobs.length;
            let job = createJob(req.body);
            jobs.push(job);
    
            if(jobs.length > jobs_length)
                return res.send('Job Added');
        }
        else return res.status(400).send({ errors : errors});

        return res.status(500).send('Internal Error');

    } catch (error) {
        return res.status(500).send('Internal Error');
    }
}); */