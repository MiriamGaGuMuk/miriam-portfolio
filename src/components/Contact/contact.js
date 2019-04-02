import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, ListItem, List, ListItemContent} from 'react-mdl';
import {Link} from 'react-router-dom';

class Contact extends Component{
    render(){
        return(
          <div className="container__card">
            <div id='contact-card'>
            <content >
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle className="Contact" style={{color: '#fff', height: '150px', background: 'url(http://www.lifeinsideuk.com/wp-content/uploads/2018/10/Contact-Us-514727914-1920x890-Oct-20.jpg) center / cover'}}></CardTitle>
                    <CardText>
                    <List>
                      <ListItem>
                        <Link to='/'><ListItemContent><i class="fas fa-at"></i> miriam.garcia.guzman.novy@gmail.com</ListItemContent></Link>
                      </ListItem>
                      <ListItem>
                        <Link to='/'><ListItemContent> <i class="fab fa-github"></i> MiriamGaGuMuk</ListItemContent></Link>
                      </ListItem>
                      <ListItem>
                       <Link to='/'> <ListItemContent> <i class="fab fa-gitlab"></i> MiriamGaGu</ListItemContent></Link>
                      </ListItem>
                      <ListItem>
                        <Link to='/'><ListItemContent> <i class="fab fa-linkedin-in"></i> /miriamgagu</ListItemContent></Link>
                      </ListItem>
                    </List>
                    </CardText>
                </Card>
            </content>
            </div>
            </div>
        )
    }
}


export default Contact;