import React, { Component } from 'react';
import '../assets/css/weatherbar.css';
import DayMaker from './dayMaker';
import Graph from './graph';

class WeatherBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      graphShown: false
    }
    this.showGraph = this.showGraph.bind(this)
  }
  showGraph(){
    this.state.graphShown ?
      this.setState({graphShown: false})
    :
    this.setState({graphShown: true})
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
        <DayMaker list={this.props.weather} graph={this.state.graphShown}/>
        <Graph data={this.props.weather} graph={this.state.graphShown}/>
      </div>
    )
  }
}

export default WeatherBar;