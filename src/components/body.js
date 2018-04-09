import React, { Component } from 'react';
import SearchBar from './searchbar';
import WeatherBar from './weatherbar';
import weather from '../api/weather';

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {}
    }
    this.getWeather = this.getWeather.bind(this);
  }
  getWeather(zip){
    weather.getWeather(zip, this.saveWeather)
  }
  saveWeather(data){
    this.setState({weather: data})
  }
  render(){
    return (
        <div>
          <SearchBar callback={this.getWeather}/>
          <WeatherBar/>
        </div>
    )
  }
}

export default Body
