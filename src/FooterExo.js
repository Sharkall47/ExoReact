import React, {Component} from 'react'
import { Grid, Divider, Container, Form, Button } from 'semantic-ui-react'
import './customStyle.css'
import FormFooterExo from './FormFooterExo'

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
          const {color, titre, url} = this.state
          this.props.test({color, titre, url})
      }



    render(){
        const {footer_color} = this.props
        const {color, titre, url} = this.state
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