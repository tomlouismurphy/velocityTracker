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
      return <div key={i}><img src='https://pbs.twimg.com/profile_images/378800000153869804/9ac76a76e4ac6fe5441a67069318e371_400x400.jpeg' className="pitcher-thumbnail"/><p onClick={this.props.togglePitcher} className="sox-starter">{item.name}</p></div>
    })
    return (
      <div className="pitcher-container">
        {pitcherList}
      </div>
    );
  }
}