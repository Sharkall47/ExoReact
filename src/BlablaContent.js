import React, {Component} from 'react'
import { Grid, Divider, Container, Image } from 'semantic-ui-react'
import './customStyle.css'

export default class BlablaContent extends Component {
    state = {
        
        
    }

    render(){
        const {blabla_title, text_Lorem}=this.props
        return(
            <Container style={{marginTop:'50px', marginBottom:'50px'}}>
                <Grid stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={16}>
                            <h1>{blabla_title}</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            {text_Lorem}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            {text_Lorem}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}