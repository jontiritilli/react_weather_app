import React, {Component} from 'react';
import '../assets/css/index.css';
import logo from '../assets/images/weather.png'

class Navbar extends Component {
  render(){
    return (
      <nav>
        <div className="navMain">
          <img src={logo} alt="Logo" className="logoMain"/>
          <div className="navTitle"> Reactive Weather </div>
          <div className="navMenuContainer">
            <div className="navMenu">

            </div>
            <div className="burger">
              <span className='top'></span>
              <span className='middle'></span>
              <span className='bottom'></span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;