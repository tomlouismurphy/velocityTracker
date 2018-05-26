import React, { Component } from 'react';
import './Pitchers.css';

export class Pitchers extends Component {
  constructor(props){
    super(props);
    this.state = {
      pitchers: this.props.pitchers
    }
  }
  consoleTester = (e) => {
    console.log('bees are here');
  }
  render() {
    const pitcherList = this.state.pitchers.map((item, i) => {
      return <p onClick={this.props.togglePitcher} key={i} className="sox-starter">{item.name}</p>
    })
    return (
      <div className="pitcher-container">
        {pitcherList}
      </div>
    );
  }
}