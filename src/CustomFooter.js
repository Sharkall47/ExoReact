import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Image, Button} from 'semantic-ui-react'

class CustomFooter extends Component {

    reset = () => {
        this.props.onReset({color: "blue", height: "100px", url: "https://t2.ea.ltmcdn.com/fr/images/7/5/9/pourquoi_mon_chat_me_leche_les_cheveux_1957_600.jpg"})
    }

  render() {
    const {footer_color, footer_url, footer_height} = this.props
    return (
        <div className="App">
        <footer style={{backgroundColor: footer_color ? footer_color : "red"}}>
            <Image src={footer_url} height={footer_height} alt="" inline/>
            <Button onClick={this.reset}> Recommencer </Button>
        </footer>
        </div>
    );
  }
}

export default CustomFooter;
