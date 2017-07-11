import React from 'react';
import { Label, Well, Button,ButtonToolbar } from 'react-bootstrap'

export default class StepTimer extends React.Component {
  state = { seconds: 0,
            started: false };



  tick = () => {
    if (this.state.seconds <= 0) {
      clearInterval(this.interval);
    }
    this.setState((prevState) => ({
      seconds: prevState.seconds - 1
    }));
  }

  componentDidMount = () => {
    let started = this.props.startOnLoad == null ? false : this.props.startOnLoad;
    console.log(started);
    this.setState({ seconds: this.props.startSeconds});

    if(this.state.started)
    {
      this.interval = setInterval(this.tick, 1000);
    }
  };

  onClickTimerButton = () => {
   this.setState((prevState) => ({
      started: !prevState.started
    }));
    if(this.state.started)
    {
      clearInterval(this.interval);
    }
    else
    {
      this.interval = setInterval(this.tick, 1000);
    }
  }

  render = () => {
    let date = new Date(null);
    date.setSeconds(this.state.seconds); // specify value for SECONDS here
    let display = date.toISOString().substr(11, 8);
    let buttonDisplay = 'Start';
    if (this.state.seconds <= 0) {
      display = 'DONE';
    }
    if(this.state.started)
    {
      buttonDisplay = 'Pause';
    }
    return (
      <Well>
        <h1>{this.props.stepName}: <Label>{display}</Label>
         {this.state.seconds > 0 && <Button bsSize="large" onClick={this.onClickTimerButton}>{buttonDisplay}</Button>}
        </h1>
      </Well>
    );
  };
}