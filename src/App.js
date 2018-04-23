import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import CustomFooter from './CustomFooter';
import FooterForm from './FooterForm'
import {Grid, Container, Form, Button} from 'semantic-ui-react'

class App extends Component {

state = {
  color: "red",
  url: "https://t2.ea.ltmcdn.com/fr/images/7/5/9/pourquoi_mon_chat_me_leche_les_cheveux_1957_600.jpg",
  height: "100px",
}

modify = (e) => {
  this.setState(
    {[e.target.name]: e.target.value}
  )
}

resetFooter = ({color, height, url, e}) => {
  this.setState({
    footer_color: color,
    url: url,
    height:height,
  }
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
          <Form>
            <Form.Input label="couleur navbar" type="text" onChange={this.modify} name="color" value={color} />
            <Form.Group widths="equal">
              <Form.Input label="couleur footer" type="text" onChange={this.modify} name="footer_color" value={footer_color} />
              <Form.Input label="url" type="text" onChange={this.modify} name="url" value={url} />
              <Form.Input label="height" type="text" onChange={this.modify} name="height" value={height} />
            </Form.Group>
          </Form>
          </Container>
          <Container>
            <FooterForm onSubmitForm={this.resetFooter}/>
          </Container>
      </Grid.Column>

      <Grid.Column width={16}>
          <CustomFooter 
          footer_color={footer_color} 
          footer_url={url} 
          footer_height={height}
          onReset={this.resetFooter}
          />
      </Grid.Column>

      </Grid>
    );
  }
}

export default App;
