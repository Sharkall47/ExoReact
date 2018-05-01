import React, {Component} from 'react'
import { Grid, Divider, Container } from 'semantic-ui-react'
import './customStyle.css'

export default class NavbarExo extends Component {
    state = {
        
        
    }

    render(){
        const {navbar_color, logo} = this.props
        return(
            <Grid stackable textAlign='right' verticalAlign='middle' style={{backgroundColor: navbar_color}}>
                <Grid.Column width={2}>
                    <img src={logo} className="App-logo customLogo" alt="logo" />
                </Grid.Column>
                <Grid.Column width={14}>
                    <Container>
                        <a className="CustomAncre" href="">Lien1</a>
                        <a className="CustomAncre" href="">Lien2</a>
                        <a className="CustomAncre" href="">Lien3</a>
                        <a className="CustomAncre" href="">Lien4</a>
                        <a className="CustomAncre" href="">Lien5</a>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}