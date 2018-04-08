import React, {Component} from 'react';
import '../assets/css/searchbar.css';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    if(this.validateZip(event.target.value) || event.target.value.length===0){
      this.setState({value: event.target.value})
    }
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.value);
  }
  validateZip(value){
    if(value.length<=5){
      return /\d/.test(value)
    }
  }
  render(){
    return(
      <div className='main'>
        <form>
          <input placeholder='enter zip' name='zipcode' value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Go</button>
        </form>
      </div>
    )
  }
}

export default SearchBar