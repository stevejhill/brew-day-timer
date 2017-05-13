import React from 'react';

export default class StepTimer extends React.Component {
  state = { seconds: 0 };
  
  tick = () => {
    if(this.state.seconds <= 0)
    {
    	clearInterval(this.interval);
    }
  	this.setState((prevState) => ({
    	seconds : prevState.seconds - 1
    }));
  }
  
	componentDidMount = () => {
    this.setState({ seconds: this.props.startSeconds });
    this.interval = setInterval(this.tick, 1000);
  };
  
	render = () => {
    let date = new Date(null);
		date.setSeconds(this.state.seconds); // specify value for SECONDS here
		let display = date.toISOString().substr(11, 8);
    if(this.state.seconds <= 0)
    {
      display = 'DONE';
    }
     return (
      	<div>{display}</div>
      );
  };
}