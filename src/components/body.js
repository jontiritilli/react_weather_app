import React, { Component } from 'react';
import SearchBar from './searchbar';
import WeatherBar from './weatherbar';

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {},
      message: ''
    }
  }
  render(){
    return (
      this.props.weather.list
      ?
      <WeatherBar weather={this.props.weather.list} city={this.props.weather.city.name}/>
      :
      <div className='weatherContainer'>
        <div className='alt-text'>
          <p className='message'>{this.props.message}</p>
        </div>
      </div>
    )
  }
}

export default Body
