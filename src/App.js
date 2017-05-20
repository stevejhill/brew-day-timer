import React, { Component } from 'react';
import './App.css';
import StepAdder from './StepAdder';
import {Button, Table} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { steps : [],
                   showAddStep : false };
    this.handleViewAddStep = this.handleViewAddStep.bind(this);
    this.handleCloseViewAddStep = this.handleCloseViewAddStep.bind(this);
    this.onStepSubmit = this.onStepSubmit.bind(this);
  }
  
  handleViewAddStep() {
    this.setState((prevState) => ({
    	steps : prevState.steps,
      showAddStep : true
    }));
  }

  handleCloseViewAddStep() {
    this.setState((prevState) => ({
    	steps : prevState.steps,
      showAddStep : false
    }));
  }

  onStepSubmit(step) {
    this.state.steps.push(step);
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleViewAddStep} > 
          Add Step
        </Button>
        {this.state.showAddStep && <StepAdder onCloseClick={this.handleCloseViewAddStep} onStepSubmit={this.onStepSubmit} />}
        {this.state.steps.length && <GetSteps />}
      </div>
    );
  }
}

function GetSteps(props) {
    return (<Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>);
  }

export default App;
