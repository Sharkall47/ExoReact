import React, {Component} from 'react'
import { Grid, Divider, Container, Form, Button } from 'semantic-ui-react'
import './customStyle.css'
import FormFooterExo from './FormFooterExo'

export default class FooterExo extends Component {

    send = (data) => {
        this.props.onDataChange(data)
    }

    render(){
        const {footer_color} = this.props
        return(
            <Grid style={{background:footer_color}}>
                <Grid.Column width={16}>
                    <Container>
                         <FormFooterExo onSubmitForm={this.send}/>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}