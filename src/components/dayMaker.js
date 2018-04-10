import React, { Component } from 'react';
import WeatherPanel from './weatherPanel';
import moment from 'moment';
import stockImg from '../assets/images/weather.png';

class DayMaker extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  groupWeatherByDay() {
    const days = new Map()
    this.props.list.forEach( (w) => {
      const day = moment(w.dt*1000).format("dddd, MMMM Do")
      if( !days[day] ) days[day] = []
      days[day].push(w)
    })
    return days;
  }
  render(){
    const weather = this.props.list;
    const city = weather.city && weather.city.name
    const weatherRows = this.groupWeatherByDay( weather || [] )
    const weatherPanels = Object.keys(weatherRows).map( (day, index) => (
      <WeatherPanel key={day} today={index===0} day={day} city={city} weatherRows={weatherRows[day]}/>
    ));
    return (
      <div className='weatherContainer'>
        {weatherPanels}
      </div>
    )
  }
}

export default DayMaker;