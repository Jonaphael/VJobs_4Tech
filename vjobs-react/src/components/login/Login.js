import React, { Component } from 'react'
import md5 from 'md5'


export default class Login extends Component{

    state = {
        email: '',
        password: ''
    }

    shouldComponentUpdate(){
        return false;
    }

    
    render(){
        return (
            <div className="container mt-5">
        <div className="card" style={{ width: '35rem', margin: '0 auto'}}>
        <div className="card-body">
          <h5 className="card-title"><img src={require('../../assets/images/logo-vjobs.png')}/></h5>
          <h6 className="card-subtitle mb-2 text-muted">Insira seu email e senha para entrar no sistema</h6>
 
          <div className="form-group col-12">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              className="form-control" id="email"/>
          </div>
          <div className="form-group col-sm-12">
            <label htmlFor="password">Password</label>
            <input 
                onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              className="form-control" id="password"/>
          </div>

          <div className="form-group col-12 text-right mb-0">
            <button type="submit" className="btn btn-success" onClick={ () => this.props.login(this.state.email, this.state.password)}>Login</button>
          </div>
        </div>
      </div>
      </div>
        )
    }
}