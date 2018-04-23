import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CustomFooter extends Component {


  render() {
    const {footer_color, footer_url, footer_height} = this.props
    return (
        <div className="App">
        <footer style={{backgroundColor: footer_color}}>
            <img src={footer_url} height={footer_height} alt=""/>
        </footer>
        </div>
    );
  }
}

export default CustomFooter;
