import React, { Component } from 'react';
import './App.css';
import StepTimer from './StepTimer';
import { Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StepTimer startSeconds="50" />
      </div>
    );
  }
}

export default App;
