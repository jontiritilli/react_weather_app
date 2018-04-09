import React, { Component } from 'react';
import pic from '../assets/images/weather.png'
import '../assets/css/day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div className='dayContainer'>
        <div className='imgContainer'>
          <img className='dayImg' src={pic} alt=""/>
        </div>
        <div className="tempNow">Current: 75</div>
        <div className="tempLow">Low: 65</div>
        <div className="tempHigh">High: 82</div>
      </div>
    )
  }
}

export default Day