import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Image, Button} from 'semantic-ui-react'

class FooterForm extends Component {

    state = {
        color: null,
        height: null,
        url: null,
      }

      send = (e) => {
          e.preventDefault()
          const {color, height, url} = this.state
          this.props.onSubmitForm({color, height, url})
      }

      modify = (e) => {
        this.setState(
          {[e.target.name]: e.target.value}
        )
      }

  render() {
    const {color, url, height} = this.state
    return (
        <Form onSubmit={this.send}>
            <Form.Group widths="equal">
              <Form.Input label="couleur footer" onChange={this.modify} type="text" name="color" value={color} />
              <Form.Input label="url" onChange={this.modify} type="text" name="url" value={url} />
              <Form.Input label="height" onChange={this.modify} type="text" name="height" value={height} />
            </Form.Group>
            <Button> Envoyer </Button>
        </Form>
    );
  }
}

export default FooterForm;
