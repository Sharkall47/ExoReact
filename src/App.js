import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import CustomFooter from './CustomFooter';
import {Grid, Container, Form} from 'semantic-ui-react'

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
      <Grid className="App">

       <Grid.Column width={16}>
          <LandingPage navbar_color={color}/>
      </Grid.Column>

      <Grid.Column width={16}>
          <Container>
          <Form >
            <Form.Input label="couleur navbar" type="text" onChange={this.modify} name="color" value={color} />
            <Form.Group widths="equal">
              <Form.Input label="couleur footer" type="text" onChange={this.modify} name="footer_color" value={footer_color} />
              <Form.Input label="url" type="text" onChange={this.modify} name="url" value={url} />
              <Form.Input label="height" type="text" onChange={this.modify} name="height" value={height} />
            </Form.Group>
          </Form>
          </Container>
      </Grid.Column>

      <Grid.Column width={16}>
          <CustomFooter footer_color={footer_color} footer_url={url} footer_height={height}/>
      </Grid.Column>

      </Grid>
    );
  }
}

export default App;
