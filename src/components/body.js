import React, { Component } from 'react';
import SearchBar from './searchbar';
import WeatherBar from './weatherbar';


class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {}
    }
  }
  render(){
    return (
        <div>
          <WeatherBar weather={this.props.weather.list}/>
        </div>
    )
  }
}

export default Body
