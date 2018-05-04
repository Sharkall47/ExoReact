import React, {Component} from 'react'
import { Grid, Divider, Container, Form, Button } from 'semantic-ui-react'
import './customStyle.css'

export default class FooterExo extends Component {

    state = {
        contact: {}
      }

      send = (e) => {
          e.preventDefault()
          const {color, title, url} = this.state
          this.props.onSubmitForm({color, title, url})
      }

      modifyState = (e) => {
        this.setState(
          {[e.target.name]: e.target.value}
        )
      }

    render(){
        const {color, title, url} = this.state
        return(
            <Form onSubmit={this.send}>
                <Form.Group widths="equal">
                    <Form.Input label="couleur navbar" type="text" onChange={this.modifyState} name="color" value={color} />
                    <Form.Input label="url" type="text" onChange={this.modifyState} name="url" value={url} />
                    <Form.Input label="title" type="text" onChange={this.modifyState} name="title" value={title} />
                </Form.Group>
                <Button> Envoyer </Button>
            </Form>
        )
    }
}