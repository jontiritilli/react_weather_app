import React, { Component } from 'react';
import moment from 'moment';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Graph extends Component {
  createData(data){
      return data.map((item) => item.main.temp);
  }
  dataAvg(data){
    return (data.reduce((t, c) => t+c)/data.length).toFixed(2)
  }
  render(){
    const data = this.createData(this.props.data);
    return (
      <div className={this.props.graph ? 'graph' : 'graphHidden'}>
        <div className='graphHeader'>Temperature Trend</div>
        <div className='avgTemp'>Avg. Temp: {this.dataAvg(data)} °F</div>
        <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={'red'} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
    )
  }
}
export default Graph;