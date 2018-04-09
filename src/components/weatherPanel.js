import React, { Component } from 'react';
import moment from 'moment';
import pic from '../assets/images/weather.png'
import '../assets/css/day.css';

class weatherPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  convertKmphToMph(kmph) {
    return kmph * 0.621371
  }
  toSnakeCase(str) {
    return str.replace(/ /g, '_').toLowerCase()
  }
  render(){
    const rows = this.props.weatherRows.map( (row) => {
      const time = `${moment(row.dt*1000).format('LT')}`;
      const icon = `http://openweathermap.org/img/w/${row.weather[0].icon}.png`;
      const iconName = row.weather[0].description;
      const temp = `${Math.round(row.main.temp)}°F`;
      const arrowStyling = {transform: `rotate(${Math.round(row.wind.deg)}deg)`};
      const windSpeed = `${Math.round(this.convertKmphToMph(row.wind.speed))} mph`;
      const windDirection = `${Math.round(row.wind.deg)}°`;
      return(
      <div key={time} className='rowContainer'>
        <div className='dayRow'>
          <time className='dayItem'>{time}</time>
          <div className='dayItem'><img src={icon} alt={iconName} title={iconName}/></div>
          <div className='dayItem'>{temp}</div>
        </div>
        <div className="divider"></div>
      </div>
      )
    })
    return (
      <div id={this.toSnakeCase(this.props.day)} className='dayContainer'>
        {this.props.today ?
          <div className='dayDiv'>
            <h3 className='day'>Today</h3>
          </div> :
          <div className='dayDiv'>
            <h3 className='day'>{this.props.day}</h3>
          </div>
          }
        {rows}
      </div>
    )
  }
}

export default weatherPanel