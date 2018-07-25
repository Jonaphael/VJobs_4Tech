import React, { Component }from 'react'

import axios from 'axios'

class JobForm extends Component {

    state = {
        newJob: {}
    }

    postDataHandler = (event) => {

        let newJob = {
            ...this.state.newJob
        };

        if(newJob.isImpaired === undefined)
            newJob.isImpaired = false;
        else if (newJob.isImpaired === "on")
            newJob.isImpaired = true;
        else
            newJob.isImpaired = false;

            console.log(newJob)
        
        /* is active */
        newJob.isActive = true;

        axios.post('/jobs', newJob)
             .then( ( response )=> {
                newJob.id = response.data; /* the post return the id */
                this.props.addToList(newJob);
            })
             .catch(() =>{

             })
        
        /* don't refresh the page */     
        event.preventDefault();
    }

    changeValueHandler = (attributeName, value) => {
        let currentJob = this.state.newJob;

        currentJob[attributeName] = value;

        this.setState({ newJob : currentJob })
    }

    render () {
        return (
            <form className="need-validation" >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={(e) => { this.changeValueHandler('name', e.target.value) }} className="form-control" id="name" placeholder="Front End Developer" required />
                    <div className="invalid-feedback">Please type a name</div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={(e) => { this.changeValueHandler('description', e.target.value) }} 
                        className="form-control" id="description" rows="3" required></textarea>
                    <div className="invalid-feedback">Please type the description</div>
                </div>
                <div className="form-row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="habilities">Habilities and Skills</label>
                            <textarea onChange={(e) => { this.changeValueHandler('skills', e.target.value) }} 
                            className="form-control" id="habilities" rows="3" required></textarea>
                            <div className="invalid-feedback">Please type a skill</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="qualifications">Responsibilities and Qualification</label>
                            <textarea onChange={(e) => { this.changeValueHandler('responsibilities', e.target.value) }}
                             className="form-control" id="qualifications" rows="3" required></textarea>
                            <div className="invalid-feedback">Please type a qualification</div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" onChange={(e) => { this.changeValueHandler('salary', e.target.value) }} 
                            className="form-control" id="salary" placeholder="R$ 5000.00" required />
                            <div className="invalid-feedback">Please type the salary</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="area">Area</label>
                            <select id="area" className="form-control" defaultValue="Developer"
                             onChange={(e) => { this.changeValueHandler('area', e.target.value) }} >
                                <option defaultValue>Developer</option>
                                <option>Tester</option>
                                <option>Designer</option>
                                <option>Trainee | Intern</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" onChange={(e) => { this.changeValueHandler('isImpaired', e.target.value) }}
                    className="form-check-input" id="impaired" />
                    <label className="form-check-label" htmlFor="impaired">Impaired</label>
                </div>
                <button type="submit" className="btn btn-success float-right" onClick={this.postDataHandler}>
                    Create Jobs
                    <i className="fas fa-check-circle"></i>
                </button>
            </form>
        )
    }

}

export default JobForm;