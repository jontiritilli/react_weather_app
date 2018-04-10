import React, {Component} from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/images/weather.png';
import SearchBar from './searchbar';

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
            <SearchBar callback={this.props.callback}/>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;