import React from 'react'
import { Modal, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'

export default class StepAdder extends React.Component {
  state = {type: 'mash',
           time: '',
           name: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCloseClick();
    this.props.onStepSubmit({type: this.state.type, time: this.state.time, name: this.state.name});
  }

  setValue = (field, event) => {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }
  
  render = () =>  {
    return <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Add Step</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <FormGroup controlId="formControlsSelectMultiple">
            <InputGroup>
            <InputGroup.Addon>
              Type
            </InputGroup.Addon>
              <FormControl componentClass="select" onChange={this.setValue.bind(this,'type')}>
                <option value="mash">Mash Timer</option>
                <option value="hop">Hop Timer</option>
              </FormControl>
            </InputGroup>
            <InputGroup>
            <InputGroup.Addon>
              Time
            </InputGroup.Addon>
              <FormControl type="text" placeholder="HH:MM:SS" onChange={this.setValue.bind(this,'time')}>
              </FormControl>
            </InputGroup>
             <InputGroup>
            <InputGroup.Addon>
              Name
            </InputGroup.Addon>
              <FormControl type="text" placeholder="STEP NAME" onChange={this.setValue.bind(this,'name')}>
              </FormControl>
            </InputGroup>
          </FormGroup>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.props.onCloseClick}>Close</Button>
        <Button onClick={this.handleSubmit} bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
  }
}