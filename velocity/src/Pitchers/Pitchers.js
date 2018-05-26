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
      return <p key={i}>{item.name}</p>
    })
    return (
      <div>
        {pitcherList}
      </div>
    );
  }
}