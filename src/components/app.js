import React, { Component } from 'react';
import '../assets/css/app.css';
import Navbar from "./navbar";
import Body from './body';

class App extends Component {
  render(){
    return (
      <div>
          <div className="app">
            <Navbar/>
            <Body/>
          </div>
      </div>
    );
  }
}

export default App;
