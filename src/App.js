import React, { Component } from 'react';
import './App.css';
import StepAdder from './StepAdder';
import {Navbar, Nav, NavDropdown, MenuItem, Panel, Button, Table} from 'react-bootstrap';


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
    let currentIndex = this.state.steps.length + 1;
    this.state.steps.push({key:currentIndex, type:step.type, name:step.name, time:step.time});
  }

  render() {
    return (
      <div className="App">
        <NavigationBar addStepAction={this.handleViewAddStep} />
        {this.state.showAddStep && <StepAdder onCloseClick={this.handleCloseViewAddStep} onStepSubmit={this.onStepSubmit} />}
        {this.state.steps.length && <GetSteps steps={this.state.steps} />}
      </div>
    );
  }
}

function GetSteps(props) {
   let rows = props.steps.map((step) => (
     <tr key={step.key}>
        <td>{step.key}</td>
        <td>{step.type}</td>
        <td>{step.name}</td>
        <td>{step.time}</td>
      </tr>
   ))
    return (
    <Panel>
    <div className="table-responsive">
      <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>type</th>
          <th>name</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  </div>
  </Panel>);
}

function NavigationBar(props) {
  return (<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Brew Day Timer
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavDropdown eventKey={1}  title="Action" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1} onClick={props.addStepAction}>Add Brew Step</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={1.2}>Start Brew Day</MenuItem>
      </NavDropdown>  
    </Nav>
  </Navbar>);
}

export default App;
