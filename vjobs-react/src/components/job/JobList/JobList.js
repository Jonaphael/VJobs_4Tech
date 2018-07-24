import React, { Component } from 'react'

import JobCard from '../JobCard/JobCard'
import Loading from '../Loading/Loading'

import jobsDB from '../../../assets/jobs'
import axios from 'axios'


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
        axios.get('/jobs')
             .then( response => {
                this.setState({ jobs : response.data });
             })
             .catch( error => {
                 console.log(error);
             })
        // this.setState({ jobs : jobsDB })
    }

    jobEditHandler = (id) => {
        alert("Updated successfully")
    }

    jobRemoveHandler = (id, name) => {
        const result = window.confirm(`Are you sure you want to remvove '${ name }'`);
        axios.delete(`/jobs/${id}`)
             .then( response => {
                alert("Job removed succesfully");
             })
            .catch( error => {
                alert(`Error removing job ${name}`);
            }) 
    }

    render(){

       /* if(this.state.jobs.length === 0)
            return (<Loading/>);
        */
        
        let foundJobs = 
        
            (this.state.jobs !== undefined && this.state.jobs.length > 0) ?

            (this.state.jobs.map( job => {
                return (
                <JobCard 
                    key = {job.id} 
                    name= { job.name }
                    description= { job.description }
                    salary = { job.salary }
                    area = { job.area }
                    editHandler = { () => this.jobEditHandler(job.id) }
                    removeHandler = { () => this.jobRemoveHandler(job.id, job.name) }>
                </JobCard> );
            })
        ) 
        :
        (<Loading/>)


         return (
             <div className="row mt-3" id="card-containers">
                 { foundJobs }
             </div>
         )
    }

}

export default JobList;