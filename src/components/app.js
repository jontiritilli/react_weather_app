import React from 'react';
import '../assets/css/app.css';
import Navbar from "./navbar";
import Body from './body';

const App = () => (
    <div>
        <div className="app">
          <Navbar/>
          <Body/>
        </div>
    </div>
);

export default App;
