import React, { Component } from 'react';
import '../assets/css/weatherbar.css';
import DayMaker from './dayMaker';

class WeatherBar extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div>
        <div className="currentCity">Current City: {this.props.city ? this.props.city : `City Name Unavailable`}</div>
        <DayMaker list={this.props.weather}/>
      </div>
    )
  }
}

export default WeatherBar;