import React, {Component} from 'react'
import { Grid, Divider, Container, Form, Button } from 'semantic-ui-react'
import './customStyle.css'

export default class FooterExo extends Component {
    state = {
        
        
    }

    render(){
        const {footer_color} = this.props
        return(
            <Grid style={{background:footer_color}}>
                <Grid.Column width={16}>
                    <Container>
                        {/* <Form>
                            <Form.Input label="couleur navbar" type="text" onChange={this.modify} name="color" value={color} />
                            <Form.Group widths="equal">
                            <Form.Input label="couleur footer" type="text" onChange={this.modify} name="footer_color" value={footer_color} />
                            <Form.Input label="url" type="text" onChange={this.modify} name="url" value={url} />
                            <Form.Input label="height" type="text" onChange={this.modify} name="height" value={height} />
                            </Form.Group>
                        </Form> */}
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}