import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Divider} from 'semantic-ui-react'

import NavbarExo from './NavbarExo'
import AccueilExo from './AccueilExo'
import BlablaContent from './BlablaContent'
import FooterExo from './FooterExo'
import _ from 'lodash'


class App extends Component {

    // Comment by Jimmy

    state = {
        lapis: '#26619c',
        logo_url: 'https://yt3.ggpht.com/a-/AJLlDp1yh7LpDl_fQQd0iWf_u7k-Y7M5y4ENxMcFfQ=s900-mo-c-c0xffffffff-rj-k-no',
        home_url: 'http://moziru.com/images/drawn-wallpaper-shark-logo-7.jpg',
        title_text: 'I lOVE CODE & DESIGN',
        blabla_title:'blabla title',
        text_Lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, magni libero? Ipsa itaque dolorum alias nihil pariatur, atque ipsum. Illo ipsum, nobis voluptate magnam quaerat molestiae! Similique odio magni quam. Explicabo dolorem qui quaerat cumque sed vitae nemo quis provident veritatis placeat iusto quos quo, modi nisi natus earum soluta fugiat dolore quod iure magni consequuntur labore porro! Consequatur, voluptas. Sit esse velit quo ullam nostrum perspiciatis quis iure, laboriosam tempore omnis eveniet sequi aspernatur, cupiditate accusantium dicta at nobis. Aperiam ex cupiditate quos, nobis natus enim aliquid totam amet. Vel exercitationem mollitia perspiciatis molestiae nam cumque dolorum nulla delectus praesentium consequatur dicta officia voluptate, a reprehenderit ut. Iste, architecto vel sequi nihil quia tempora ex nulla consequatur adipisci odio.',

    }


    handleFooterChange = ({color, title, url}) => {
        console.log('url', url)
        this.setState({
          lapis: color,
          home_url: url,
          title_text: title,
        })
        if(!url){
            const random_number = _.random(0, 1000);
            this.setState({home_url: "https://picsum.photos/200/300/?image=" + random_number})
        }
    }


      randomPic = ({url, e}) => {
        const reboot = 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png'
        this.setState({
          home_url: url,
        })
      }


    render(){
        const {lapis, logo_url, home_url, title_text, blabla_title, text_Lorem} = this.state
        return(
            
            <Grid stackable>
                <Grid.Column width={16}>
                    <NavbarExo navbar_color={lapis} logo={logo_url}/>
                </Grid.Column >
                <Grid.Column width={16}>
                    <AccueilExo 
                        bg={home_url} 
                        title_text={title_text}
                        onRandom={this.randomPic}
                        />
                </Grid.Column>
                <Grid.Column width={16}>
                    <BlablaContent blabla_title={blabla_title} text_Lorem={text_Lorem}/>
                </Grid.Column>
                <Grid.Column width={16}>
                    <BlablaContent blabla_title={blabla_title} text_Lorem={text_Lorem}/>
                </Grid.Column>
                <Grid.Column width={16}>
                    <FooterExo
                        footer_color={lapis}
                        onDataChange={this.handleFooterChange}
                    />
                </Grid.Column>
            </Grid>
        )
    }

}

export default App;
