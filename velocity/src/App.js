import React, { Component } from 'react';
import './App.css';
import {Pitchers} from './Pitchers/Pitchers.js';
import {SelectedPitcher} from './SelectedPitcher/SelectedPitcher.js';
import data from './scripts/pitchers.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pitchers: [],
      selectedPitcher: {}
    }
  }
  componentDidMount(){
    const state = this.state;
    for (let i = 0; i < data.data.length; i++){
      state.pitchers.push(data.data[i]);
    }
    console.log(state.pitchers);
    this.setState(state);
  }
  handleFancy = (e) => {
    console.log(data);
  }
  togglePitcher = (e) => {
    console.log(e.currentTarget);
    const state = this.state;
    for (let i = 0; i < state.pitchers.length; i++){
      if (state.pitchers[i].name === e.currentTarget.innerText){
        state.selectedPitcher = state.pitchers[i];
      } else {
        ;
      }
    }
    console.log(state.selectedPitcher);
    this.setState(state);
  }
  render() {
    return (
      <div>
        <div id='pitchers-heading'>
          <h3>Red Sox Starters - 2018</h3>
          <div id='heading-instructions'>
            <p>Click on a pitcher's name for more info.</p>
          </div>
        </div>
        <Pitchers togglePitcher={this.togglePitcher} pitchers={this.state.pitchers}/>
        <SelectedPitcher selectedPitcher={this.state.selectedPitcher}/>
      </div>
    );
  }
}

export default App;