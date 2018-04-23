import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';

class App extends Component {

state = {
  color: "red"
}

modify = (e) => {
  this.setState(
    {[e.target.name]: e.target.value}
  )
}

  render() {
    const {color} = this.state
    return (
      <div className="App">
       <LandingPage navbar_color={color}/>
       <form >
         <input type="text" onChange={this.modify} name="color" value={color} />
       </form>
      </div>
    );
  }
}

export default App;
