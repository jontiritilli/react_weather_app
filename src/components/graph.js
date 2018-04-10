import React, { Component } from 'react';
import moment from 'moment';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Graph extends Component {
  createData(data){
    return data.map((item, index) => item.main.temp)
  }
  dataAvg(data){
    return (data.reduce((s, v) => s+v)/data.length).toFixed(2)
  }
  render(){
    const data = this.createData(this.props.data);
    const avg = this.dataAvg(data);
    console.log(this.props)
    return (
      <div className={this.props.graph ? 'graph' : 'graphHidden'}>
        <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={'red'} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div className='avgTemp'>Average Temperature: {avg} °F</div>
      </div>
    )
  }
}
export default Graph;