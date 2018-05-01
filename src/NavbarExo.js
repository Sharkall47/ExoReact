import React, {Component} from 'react'
import { Grid, Divider, Container, Image } from 'semantic-ui-react'
import './customStyle.css'

export default class NavbarExo extends Component {
    state = {
        
        
    }

    render(){
        const {navbar_color, logo} = this.props
        return(
            <Grid stackable style={{backgroundColor: navbar_color}}>
                <Grid.Row centered verticalAlign='middle' style={{padding: '25px'}}>
                    <Grid.Column width={2} >
                        <Image src={logo} className="App-logo customLogo" alt="logo" />
                    </Grid.Column>
                    <Grid.Column width={14} textAlign='right'>
                            <a className="customAncre" href="">Lien1</a>
                            <a className="customAncre" href="">Lien2</a>
                            <a className="customAncre" href="">Lien3</a>
                            <a className="customAncre" href="">Lien4</a>
                            <a className="customAncre" href="">Lien5</a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}