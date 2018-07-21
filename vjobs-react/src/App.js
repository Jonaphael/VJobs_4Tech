import React, { Component } from 'react';

import './App.css';

import Header from './components/navigation/Header/Header'
import JobForm from './components/job/JobForm/JobForm'
import JobList from './components/job/JobList/JobList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <JobForm/>
          <JobList />
        </div>
      </div>
    );
  }
}

export default App;
