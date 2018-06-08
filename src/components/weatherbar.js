import React, { Component } from 'react';
import '../assets/css/weatherbar.css';
import DayMaker from './dayMaker';
import Graph from './graph';

class WeatherBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShown: false
    };
    this.showGraph = this.showGraph.bind(this);
  }
  showGraph(){
    if(this.state.isShown){
      this.setState({isShown: false})
    } else {
      this.setState({isShown: true})
    }
  }
  render(){
    return (
      <div>
        <div className="row">
          <div className="currentCity">
            Current City: {this.props.city ? this.props.city : `City Name Unavailable`}
          </div>
          <div>
            <button className="graphBtn" onClick={this.showGraph}>Graph</button>
          </div>
        </div>
        <DayMaker list={this.props.weather} graph={this.state.isShown}/>
        <Graph data={this.props.weather} graph={this.state.isShown}/>
      </div>
    )
  }
}

export default WeatherBar;