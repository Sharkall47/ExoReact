import React, {Component} from 'react'
import { Grid, Divider, Container, Form, Button } from 'semantic-ui-react'
import './customStyle.css'

export default class FooterExo extends Component {

    state = {
        color: null,
        titre: null,
        url: null,
      }

    //   componentWillReceiveProps(new_props){
    //     this.setState({
    //         color: new_props.color,
    //         titre: new_props.title,
    //         url: new_props.url
    //     })
    //   }

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
        const {color, titre, url} = this.state
        return(

                         <Form onSubmit={this.send}>
                            <Form.Group widths="equal">
                                <Form.Input label="couleur navbar" type="text" onChange={this.modify} name="color" value={color} />
                                <Form.Input label="url" type="text" onChange={this.modify} name="url" value={url} />
                                <Form.Input label="titre" type="text" onChange={this.modify} name="titre" value={titre} />
                            </Form.Group>
                            <Button> Envoyer </Button>
                        </Form>

        )
    }
}