import React, { Component } from 'react';
import './SelectedPitcher.css';

export class SelectedPitcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedPitcher: this.props.selectedPitcher.name,
			gamesStarted: this.props.selectedPitcher.gamesStarted
		}
	}
	seeState = (e) => {
		console.log(this.state.selectedPitcher);
		console.log(this.state.gamesStarted);
	}
	static getDerivedStateFromProps(props, state);
  	render() {
		return (
		  <div>
		  	<h3 onClick={this.seeState}>Test</h3>
		    <h3>{this.state.selectedPitcher}</h3>
		  </div>
		);
  	}
}