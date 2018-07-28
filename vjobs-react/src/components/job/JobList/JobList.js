import React, { Component } from 'react'

import JobCard from '../JobCard/JobCard'
import Loading from '../Loading/Loading'
import JobForm from '../JobForm/JobForm'
import Collapse from '../../../hoc/collapse/Collapse' 
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

    addItemToList = (newItem) => {
        let currentJobs = this.state.jobs;

        currentJobs.push(newItem);
        this.setState({jobs : currentJobs});
    }

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

        const axiosConfig = {
            headers: {
                'Authorization' : 'Bearer ' + window.localStorage.getItem('token')
            }
        }
    
        if(window.confirm(`Are you sure you want to remove '${ name }'`)){
            axios.delete(`/jobs/${id}`, axiosConfig)
                 .then( response => {
                    let updateJobs = this.state.jobs;
                    const removedIndex = updateJobs.findIndex( item => item.id = id);
                    updateJobs.splice(removedIndex,1);
                    this.setState({jobs : updateJobs})
                 })
                .catch( error => {
                    if(error.response.status === 401)
                        console.log('Nao autorizado');

                    console.log("error")
                })
        }
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
                    id = { job.id }
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
            <div>
                <Collapse collapseId="jobForm"innerText="New Job">
                    <JobForm addToList={this.addItemToList}/>
                </Collapse>
                <div className="row mt-3" id="card-containers">
                    { foundJobs }
                </div>
            </div>
         )
    }

}

export default JobList;