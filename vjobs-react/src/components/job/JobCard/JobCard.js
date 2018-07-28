import React from 'react'
import { Link } from 'react-router-dom'

import devImage from '../../../assets/images/designer.png'

const jobCard = ( props ) => { 

    let image = null;

    switch (props.area) {
        case 'dev':
            image = devImage;
            break;
        default:
            image = devImage;
            break;
    }

    return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
                <img className="card-img-top" src= { image } alt="Card cap" />
                <div className="card-body">
                    <h5  className="card-title"> 
                    <Link to={`/jobs/${props.id}`}> {props.name} </Link>
                    </h5>
                    <b>Description:</b>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <b>Salary</b>
                    <p> R$ { props.salary }</p>
                    <button type="button" onClick = { props.editHandler } className="btn btn-warning mr-2"><i className="fas fa-edit"></i> Edit </button>
                    <button type="button" onClick = { props.removeHandler } className="btn btn-danger"><i className="fas fa-trash-alt"></i> Remove </button>
                </div>
            </div>
            </div>
            );
}

export default jobCard;