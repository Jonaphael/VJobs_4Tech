import React, { Component } from 'react'
import axios from 'axios'

import img from '../../../assets/images/designer.png'


class JobDetail extends Component{

    state = {
        job : []
    }

    componentDidMount(){
        axios.get(`/jobs/${this.props.match.params.id}`)
        .then( res => {
            this.setState({ job : res.data})
        })
        .catch( err => {
            console.log(err)
        })
    }

    render(){
        return (
            // <div className="row mt-5 border rounded">
            // <div className="col-12 mt-4">
                
            //     <h2> { this.state.job.name } </h2>
            //     <span class="badge badge-info">{ this.state.job.isImpaired ? "Impaired ": ""}</span>
            //     <hr/>
                
            //     </div>
            // </div>
            <div className="card mt-3">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                <img className="mx-auto d-block" src= {img} alt="Job description"/>
                </div>
                <div className="col-xs-12 col-sm-6">
                <h3> { this.state.job.name }</h3>
                <h4>Description:</h4>
                <p> { this.state.job.description } </p>
                <h4>Salary: <span> R$ {this.state.job.salary } </span></h4>
                <h4>Skills:</h4>
                <p> { this.state.job.skills }</p>
                </div>
            </div>
        </div>
        )
    }
}


export default JobDetail;