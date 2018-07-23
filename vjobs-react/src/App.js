import React, { Component } from 'react';

import './App.css';

import Header from './components/navigation/Header/Header'
import JobForm from './components/job/JobForm/JobForm'
import JobList from './components/job/JobList/JobList'
import Collapse from './hoc/collapse/Collapse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        
        <Collapse collapseId="jobForm"innerText="New Job">
          <JobForm/>
        </Collapse>
        
        {/* list  */}
        <JobList />
        </div>
      </div>
    );
  }
}

export default App;
