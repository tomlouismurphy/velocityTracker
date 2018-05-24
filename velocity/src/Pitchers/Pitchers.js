import React, { Component } from 'react';
import './Pitchers.css';

export class Pitchers extends Component {
  consoleTester = (e) => {
    console.log('bees are here');
  }
  render() {
    return (
      <div>
        <p>Test1</p>
        <button onClick={this.consoleTester}>Press Me</button>
      </div>
    );
  }
}