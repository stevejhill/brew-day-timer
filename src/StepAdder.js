import React from 'react'
import { Modal, Form, FormGroup, Col, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap'

export default class StepAdder extends React.Component {
  state = {
    type: 'mash',
    time: '',
    name: '',
    timeValidationState: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let timeRegEx = /[0-9]+:[0-5][0-9]:[0-5][0-9]/;
    let hasValidationErrors = false;

    if(!timeRegEx.test(this.state.time))
    {
      this.setState({timeValidationState: 'error'});
      hasValidationErrors = true;
    }
    if(hasValidationErrors)
    {
      return;
    }
    else
    {
      this.props.onCloseClick();
      this.props.onStepSubmit({ type: this.state.type, time: this.state.time, name: this.state.name });
    }
  }

  setValue = (field, event) => {
    let object = {};
    object[field] = event.target.value;
    this.setState(object);
  }


  render = () => {
    return <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Step</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="type">
              <Col componentClass={ControlLabel} sm={2}>
                Type
              </Col>
              <Col sm={10}>
                <FormControl componentClass="select" onChange={this.setValue.bind(this, 'type')}>
                  <option value="mash">Mash Timer</option>
                  <option value="hop">Hop Timer</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup controlId="time" validationState={this.state.timeValidationState}>
              <Col componentClass={ControlLabel} sm={2}>
                Time
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="HH:MM:SS" onChange={this.setValue.bind(this, 'time')} />
                {this.state.timeValidationState !== null && <HelpBlock>Input must be in the following format - HH:MM:SS</HelpBlock>}
              </Col>
            </FormGroup>

            <FormGroup controlId="stepname">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="STEP NAME" onChange={this.setValue.bind(this, 'name')} />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onCloseClick}>Close</Button>
          <Button onClick={this.handleSubmit} bsStyle="primary">Save changes</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  }
}