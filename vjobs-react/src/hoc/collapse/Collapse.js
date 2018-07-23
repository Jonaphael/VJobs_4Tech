import React from 'react';

const collapse = (props) => {
    return (
        <div className="row mt-3" id="newJob">
            <div className="col-12">
                <a className="btn btn-primary" data-toggle="collapse" href= { "#" + props.collapseId}  role="button" aria-expanded="false" aria-controls="jobs_collapse">
                        <i className="fa fa-plus-square" aria-hidden="true"></i> { props.innerText }
                </a>
                <div className="collapse mt-3" id={props.collapseId}>
                    <div className="card card-body col-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default collapse;