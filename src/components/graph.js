import React, { Component } from 'react';
import moment from 'moment';
// import { LineChart } from 'react-d3';

class Graph extends Component {
  createData(data){
    // return data.map((index, item) =>
    //   {label: moment(item.dt).format('h:m'), value: item.main.temp}
    // )
  }
  render(){
    const data = this.createData(this.props.data)
    console.log(data)
    return(
      <h1>Testing</h1>
    // <LineChart
    //   data={createData(this.props.data)}
    //   width={500}
    //   height={200}
    //   fill={'#3182bd'}
    //   title='Line Chart'
    // />
    )
  }
}
export default Graph;