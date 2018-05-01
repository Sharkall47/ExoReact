import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Divider} from 'semantic-ui-react'

import NavbarExo from './NavbarExo'


class App extends Component {

    state = {
        lapis: '#26619c',
        logo_url: 'https://yt3.ggpht.com/a-/AJLlDp1yh7LpDl_fQQd0iWf_u7k-Y7M5y4ENxMcFfQ=s900-mo-c-c0xffffffff-rj-k-no',
    }
    

    render(){
        const {lapis, logo_url} = this.state
        return(
            
            <Grid stackable>
                <Grid.Column width={16}>
                    <NavbarExo navbar_color={lapis} logo={logo_url}/>
                </Grid.Column >
                <Grid.Column width={16}>
                    <p>Yolo</p>
                </Grid.Column>
            </Grid>
        )
    }

}

export default App;
