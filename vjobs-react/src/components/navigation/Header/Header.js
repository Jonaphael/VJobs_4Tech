import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo-h-vjobs.png'

const header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="">
            <img src= { logo } style={ { width: '80px' }} alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/jobs">Jobs <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            </ul>
        </div>

    <a className="va-item nav-link text-white"> { props.userName }</a>
    <a className="va-item nav-link text-white"><i className="fas fa-sign-out-alt" onClick={ () => props.logout()}></i></a>
        
    </nav>
);

export default header;