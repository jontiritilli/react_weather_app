import React, { Component } from 'react';
import '../assets/css/weatherbar.css';
import DayMaker from './dayMaker';
import Graph from './graph';

class WeatherBar extends Component {
  render(){
    console.log(this.props.weather)
    return (
      <div>
        <div className="currentCity">
          Current City: {this.props.city ? this.props.city : `City Name Unavailable`}
        </div>
        <DayMaker list={this.props.weather}/>
        <Graph data={this.props.weather}/>
      </div>
    )
  }
}

export default WeatherBar;