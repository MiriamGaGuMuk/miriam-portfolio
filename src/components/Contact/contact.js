import React, {Component} from 'react';
import { Card, CardTitle, CardText, ListItem, List, ListItemContent} from 'react-mdl';
import {Link} from 'react-router-dom';
import './contact.css'

class Contact extends Component{
    render(){
        return(
          <div>
            <div>
            <content >
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle  style={{color: '#fff', height: '150px', background: 'url(http://www.lifeinsideuk.com/wp-content/uploads/2018/10/Contact-Us-514727914-1920x890-Oct-20.jpg) center / cover'}}></CardTitle>
                    <CardText>
                    <List>
                      <ListItem>
                        <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=miriam.garcia.guzman.novy@gmail.com'><ListItemContent><i className="fas fa-at"></i>miriam.garcia.guzman.novy@gmail.com</ListItemContent></a>
                      </ListItem>
                      <ListItem>
                        <a href='https://github.com/MiriamGaGuMuk'><ListItemContent> <i className="fab fa-github"></i> MiriamGaGuMuk </ListItemContent></a>
                      </ListItem>
                      <ListItem>
                       <a href='https://gitlab.com/MiriamGaGu'> <ListItemContent> <i className="fab fa-gitlab"></i> MiriamGaGu </ListItemContent></a>
                      </ListItem>
                      <ListItem>
                        <a href='https://www.linkedin.com/in/miriamgagu/'><ListItemContent> <i className="fab fa-linkedin-in"></i> /miriamgagu</ListItemContent></a>
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