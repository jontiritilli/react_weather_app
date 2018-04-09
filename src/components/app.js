import React, { Component } from 'react';
import '../assets/css/app.css';
import Navbar from "./navbar";
import Body from './body';
import keys from '../api/config';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {}
    };

    this.getWeather = this.getWeather.bind(this);
    this.saveWeather = this.saveWeather.bind(this);
  }
  getWeather(zip) {
    const requestString = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip
                        + "&cluster=yes&format=json&units=imperial" + "&APPID=" + keys.weatherApiKey;
    const req = new XMLHttpRequest();
    req.onload = this.saveWeather;
    req.open("get", requestString, true);
    req.send();
  }
  saveWeather(data){
    let results = JSON.parse(data.target.responseText);
    this.setState({weather: results})
  }
  render(){
    return (
      <div>
          <div className="app">
            <Navbar callback={this.getWeather}/>
            <Body weather={this.state.weather}/>
          </div>
      </div>
    );
  }
}

export default App;
