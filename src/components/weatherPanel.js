import React, {Component} from 'react';
import moment from 'moment';
import pic from '../assets/images/weather.png'
import '../assets/css/day.css';

class WeatherPanel extends Component {
  toSnakeCase(str) {
    return str.replace(/ /g, '_').toLowerCase()
  }
  toShortDay(str){
    return [...str].splice(0,3).join('');
  }
  makeRows(data){
    let rows = data.map(row => {
      const time = `${moment(row.dt*1000).format('LT')}`;
      const icon = `https://openweathermap.org/img/w/${row.weather[0].icon}.png`;
      const iconName = row.weather[0].description;
      const temp = `${Math.round(row.main.temp)}°F`;
      return (
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
    return rows;
  }
  render(){
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
        {this.makeRows(this.props.weatherRows)}
      </div>
    )
  }
}

export default WeatherPanel