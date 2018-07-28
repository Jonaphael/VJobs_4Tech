import React, { Component } from 'react';

import './App.css';

import Header from './components/navigation/Header/Header'
import JobList from './components/job/JobList/JobList'
import About from './components/about/About'
import Main from './components/navigation/Main/Main'
import { Switch, Route } from 'react-router-dom'
import JobDetail from './components/job/JobDetail/JobDetail'
import Login from './components/login/Login'
import axios from 'axios'

class App extends Component {

  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user')) || null
  }

  getLoggedUser(){
    return this.state.loggedUser;
  }

  logoutHandler = () => {
    window.localStorage.clear();
    this.setState({loggedUser : null})
  }

  loginHandler = ( emailVal , passwordVal) => {
    axios.post('/login',{ 'email': emailVal, 'password' : passwordVal })
    .then( response =>{
      window.localStorage.setItem('user' , JSON.stringify(response.data.user))
      window.localStorage.setItem('token' , JSON.stringify(response.data.token))
      this.setState({ loggedUser : response.data.user })
    })
    .catch( error => {
      alert('Invalid login')
    })
  }

  render() {
    
      if(this.getLoggedUser()){
      return ( <div className="App">
        <Header userName={this.state.loggedUser.name} logout={this.logoutHandler}/>
        <Main>
          <Switch>
            <Route exact path="/" component={ JobList }></Route>
            <Route exact path="/jobs" component={ JobList }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/jobs/:id" component={ JobDetail }></Route>
          </Switch>
        </Main>
      </div>)
    }
    return <Login login={this.loginHandler}/>
    
  }
}

export default App;
