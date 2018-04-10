import React, {Component} from 'react';
import moment from 'moment';
import pic from '../assets/images/weather.png'
import '../assets/css/day.css';

class WeatherPanel extends Component {
  convertKmphToMph(kmph) {
    return kmph * 0.621371
  }
  toSnakeCase(str) {
    return str.replace(/ /g, '_').toLowerCase()
  }
  toShortDay(str){
    str = str.split(' ');
    str[0] = str[0].substr(0,3);
    str[1] = str[1].substr(0,3);
    return str.join(' ');
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
            <p className='day'>Today</p>
          </div> :
          <div className='dayDiv'>
            <p className='day'>{this.toShortDay(this.props.day)}</p>
          </div>
          }
        {rows}
      </div>
    )
  }
}

export default WeatherPanel