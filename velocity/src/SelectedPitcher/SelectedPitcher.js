import React, { Component } from 'react';
import './SelectedPitcher.css';

export class SelectedPitcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedPitcher: this.props.selectedPitcher.name,
			gamesStarted: [],
			dummy: [1, 2]
		}
	}
	seeState = (e) => {
		console.log(this.state.selectedPitcher);
		console.log(this.state.gamesStarted);
	}
	componentWillReceiveProps(nextProps) {
		const state = this.state;
		if (this.props.selectedPitcher.name !== nextProps.selectedPitcher.name){
			state.selectedPitcher = nextProps.selectedPitcher.name;
		}
		if (this.props.selectedPitcher.gamesStarted !== nextProps.selectedPitcher.gamesStarted) {
			state.gamesStarted.length = 0;
			for (let i = 0; i < nextProps.selectedPitcher.gamesStarted.length; i++) {
				state.gamesStarted.push(nextProps.selectedPitcher.gamesStarted[i].date);
			}
		}
		console.log(state.gamesStarted);
		this.setState(state);
	}
  	render() {
  		const gameList = this.state.gamesStarted.map((item, i) => {
	      return <p key={i} className="game-event">{item}</p>
	    })
		return (
		  <div>
		    <h3>{this.state.selectedPitcher}</h3>
		    {gameList}
		  </div>
		);
  	}
}