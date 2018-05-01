import React, {Component} from 'react'
import { Grid, Divider, Container } from 'semantic-ui-react'
import './customStyle.css'

export default class AccueilExo extends Component {
    state = {
        
        
    }

    render(){
        const {bg, title_text} = this.props
        return(
            <Grid className='accueil' stackable textAlign='center' style={{backgroundImage: `url(${bg})`}}>
                <Grid.Column width={16}>
                    <h1 className='accueil_title'>{title_text}</h1>
                </Grid.Column>
            </Grid>
        )
    }
}