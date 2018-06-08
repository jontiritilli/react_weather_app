import React, { Component } from 'react';
import SearchBar from './searchbar';
import WeatherBar from './weatherbar';

const Body = props => {
  return (
    props.weather.list ?
    <WeatherBar weather={props.weather.list} city={props.weather.city.name}/>
    :
    <div className='weatherContainer'>
      <div className='alt-text'>
        <p className='message'>{props.message}</p>
      </div>
    </div>
  )
}

export default Body
