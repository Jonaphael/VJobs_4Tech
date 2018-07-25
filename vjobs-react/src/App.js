import React, { Component } from 'react';

import './App.css';

import Header from './components/navigation/Header/Header'
import JobList from './components/job/JobList/JobList'
import About from './components/about/About'
import Main from './components/navigation/Main/Main'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={ JobList }></Route>
            <Route path="/jobs" component={ JobList }></Route>
            <Route path="/about" component={ About }></Route>
          </Switch>
        </Main>
      </div>
    );
  }
}

export default App;
