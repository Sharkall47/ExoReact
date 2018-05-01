import React, {Component} from 'react'
import { Grid, Divider, Container, Button } from 'semantic-ui-react'
import './customStyle.css'

export default class AccueilExo extends Component {
    state = {
        
        
    }

    random = () => {
        this.props.onRandom({url: "https://picsum.photos/200/300/?random"})
    }

    render(){
        const {bg, title_text} = this.props
        return(
            <Grid className='accueil' stackable textAlign='center' style={{backgroundImage: `url(${bg})`}}>
                <Grid.Column width={16}>
                    <h1 className='accueil_title'>{title_text}</h1>
                    <Button onClick={this.random} className='randomButton'> random ? </Button>
                </Grid.Column>
            </Grid>
        )
    }
}