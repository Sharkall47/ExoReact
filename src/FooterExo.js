import React, {Component} from 'react'
import { Grid, Divider, Container, Form, Button } from 'semantic-ui-react'
import './customStyle.css'

export default class FooterExo extends Component {

    state = {
        color: null,
        titre: null,
        url: null,
      }

      send = (e) => {
          e.preventDefault()
          const {color, titre, url} = this.state
          this.props.onSubmitForm({color, titre, url})
      }

      modify = (e) => {
        this.setState(
          {[e.target.name]: e.target.value}
        )
      }

    render(){
        const {footer_color} = this.props
        const {color, titre, url} = this.state
        return(
            <Grid style={{background:footer_color}}>
                <Grid.Column width={16}>
                    <Container>
                         <Form onSubmit={this.send}>
                            <Form.Group widths="equal">
                                <Form.Input label="couleur navbar" type="text" onChange={this.modify} name="color" value={color} />
                                <Form.Input label="url" type="text" onChange={this.modify} name="url" value={url} />
                                <Form.Input label="titre" type="text" onChange={this.modify} name="titre" value={titre} />
                            </Form.Group>
                            <Button> Envoyer </Button>
                        </Form>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}