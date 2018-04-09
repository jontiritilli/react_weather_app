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
      <DayMaker list={this.props.weather}/>
    )
  }
}

export default WeatherBar;