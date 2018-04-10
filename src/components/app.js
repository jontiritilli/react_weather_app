import React, { Component } from 'react';
import '../assets/css/app.css';
import background from '../assets/images/background.jpg';
import Navbar from "./navbar";
import Body from './body';
import keys from '../api/config';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {},
      message: 'Please Enter Your Zip Code'
    };

    this.getWeather = this.getWeather.bind(this);
    this.saveWeather = this.saveWeather.bind(this);
  }
  getWeather(zip) {
    const requestString = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip
                        + "&cluster=yes&format=json&units=imperial" + "&APPID=" + keys.weatherApiKey;
    const req = new XMLHttpRequest();
    req.onload = this.saveWeather;
    req.open("get", requestString, true);
    req.send();
  }
  saveWeather(data){
    let results = JSON.parse(data.target.responseText);
    if(results.cod === '404'){
      results.message = results.message.toLowerCase()
      .split(' ')
      .map(function(word) {
        return word[0].toUpperCase() + word.substr(1)
      }).join(' ')
      this.setState({weather: {}, message: `${results.message}, Please Try Another Zip`})
      return
     }
    this.setState({weather: results})
  }
  render(){
    return (
      <div>
        <div className="app">
          <Navbar callback={this.getWeather}/>
          <Body weather={this.state.weather} message={this.state.message}/>
        </div>
        <div className="backgroundImg">
          <img src={background} alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
