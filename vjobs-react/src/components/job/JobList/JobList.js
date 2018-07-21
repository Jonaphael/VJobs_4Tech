import React, { Component } from 'react'

import JobCard from '../JobCard/JobCard'
import jobsDB from '../../../assets/jobs'

class JobList extends Component {

    state = {
        jobs: [],
        selectedId: null,
        hasError: false
    }

    // constructor(){
    //     super();
    // }

    componentDidMount(){
        this.setState({ jobs : jobsDB })
    }

    jobEditHandler = (id) => {
        alert("Updated successfully")
    }

    jobRemoveHandler = (id, name) => {
        window.confirm(`Are you sure you want to remvove '${ name }'`);
    }

    render(){
        let foundJobs = (this.state.jobs.map( job => {
                return (<JobCard 
                                 key = {job.id} 
                                 name= { job.name }
                                 description= { job.description }
                                 salary = { job.salary }
                                 area = { job.area }
                                 editHandler = { () => this.jobEditHandler(job.id) }
                                 removeHandler = { () => this.jobRemoveHandler(job.id, job.name) }>
                         </JobCard>);
            })
        );

         return (
             <div className="row mt-3" id="card-containers">
                 { foundJobs }
             </div>
         )
    }

}

export default JobList;