import React, { Component } from 'react';
import moment from 'moment';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Graph extends Component {
  createData(data, type){
    if(type === 'temp'){
      return data.map((item, index) => item.main.temp)
    }
    return data.map((item, index) => item.main.humidity)
  }
  // changeGraph(event){
  //   this.createData(this.props.data, event.target.className)
  // }
  dataAvg(data){
    return (data.reduce((s, v) => s+v)/data.length).toFixed(2)
  }
  render(){
    const data = this.createData(this.props.data, null);
    const avg = this.dataAvg(data);
    return (
      <div className={this.props.graph ? 'graph' : 'graphHidden'}>
        {/* <div className="graphControls">
          <button className="temp" onClick={this.changeGraph}>Temp</button>
          <button className="humidity" onClick={this.changeGraph}>Humidity</button>
        </div> */}
        <div className='graphHeader'>Temperature Trend</div>
        <div className='avgTemp'>Avg. Temp: {avg} °F</div>
        <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={'red'} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
    )
  }
}
export default Graph;