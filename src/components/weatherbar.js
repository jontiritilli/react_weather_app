import React, { Component } from 'react';
import '../assets/css/weatherbar.css';
import Day from './day';
import weather from '../api/weather';

class WeatherBar extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div className='weatherContainer'>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
      </div>
    )
  }
}

export default WeatherBar;