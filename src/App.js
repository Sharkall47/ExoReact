import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import CustomFooter from './CustomFooter';

class App extends Component {

state = {
  color: "red",
  footer_color: "blue",
  url: "https://t2.ea.ltmcdn.com/fr/images/7/5/9/pourquoi_mon_chat_me_leche_les_cheveux_1957_600.jpg",
  height: "100px",
}

modify = (e) => {
  this.setState(
    {[e.target.name]: e.target.value}
  )
}

  render() {
    const {color, footer_color, url, height} = this.state
    return (
      <div className="App">
       <LandingPage navbar_color={color}/>
       <form >
         <input type="text" onChange={this.modify} name="color" value={color} />
         <br/>
         <br/>
         <input type="text" onChange={this.modify} name="footer_color" value={footer_color} />
         <input type="text" onChange={this.modify} name="url" value={url} />
         <input type="text" onChange={this.modify} name="height" value={height} />
       </form>

      <CustomFooter footer_color={footer_color} footer_url={url} footer_height={height}/>

      </div>
    );
  }
}

export default App;
