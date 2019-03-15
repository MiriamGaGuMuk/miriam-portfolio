import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, ListItem, List, ListItemContent} from 'react-mdl';
import {Link} from 'react-router-dom';

class Contact extends Component{
    render(){
        return(
            <div id='contact-card'>
            <content >
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.theconversation.com/files/217685/original/file-20180504-153884-1blpwfo.png?ixlib=rb-1.1.0&rect=0%2C0%2C4000%2C2000&q=45&auto=format&w=496&fit=clip) center / cover'}}> Contact Me</CardTitle>
                    <CardText>
                    <List>
                      <ListItem>
                        <Link to='#'><ListItemContent><i class="fas fa-at"></i> miriam.garcia.guzman.novy@gmail.com</ListItemContent></Link>
                      </ListItem>
                      <ListItem>
                        <Link to='#'><ListItemContent> <i class="fab fa-github"></i> MiriamGaGuMuk</ListItemContent></Link>
                      </ListItem>
                      <ListItem>
                       <Link to='#'> <ListItemContent> <i class="fab fa-gitlab"></i> MiriamGaGu</ListItemContent></Link>
                      </ListItem>
                      <ListItem>
                        <Link to='#'><ListItemContent> <i class="fab fa-linkedin-in"></i> /miriamgagu</ListItemContent></Link>
                      </ListItem>
                    </List>
                    </CardText>
                </Card>
            </content>
            </div>
        )
    }
}


export default Contact;