import React, {Component} from 'react';
import { Card, CardTitle, CardText, ListItem, List, ListItemContent} from 'react-mdl';
import './contact.css'

class Contact extends Component{
    render(){
        return(
          <div>
            <div>
            <content>
                <Card id="contact__card">
                    <CardTitle id="contact__img"  style={{background: 'url(https://media1.giphy.com/media/zSiEygkcONzyw/giphy.gif?cid=790b76115cd3683a335a2e6c515684b3&rid=giphy.gif) center / cover'}}></CardTitle>
                    <CardText>
                    <List>
                      <ListItem>
                        <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=miriam.garcia.guzman.novy@gmail.com'><ListItemContent><i className="fas fa-at"></i>miriam.garcia.guzman.novy@gmail.com</ListItemContent></a>
                      </ListItem>
                      <ListItem>
                        <a href='https://github.com/MiriamGaGuMuk'><ListItemContent><i className="fab fa-github"></i> MiriamGaGuMuk </ListItemContent></a>
                      </ListItem>
                      <ListItem>
                       <a href='https://gitlab.com/MiriamGaGu'> <ListItemContent> <i className="fab fa-gitlab"></i> MiriamGaGu </ListItemContent></a>
                      </ListItem>
                      <ListItem>
                        <a  href='https://www.linkedin.com/in/miriamgagu/'><ListItemContent> <i className="fab fa-linkedin-in"></i> /miriamgagu</ListItemContent></a>
                      </ListItem>
                    </List>
                    </CardText>
                </Card>
                {/* <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="es_ES" data-type="horizontal" data-theme="dark" data-vanity="miriamgagu"><a class="LI-simple-link" href='https://mx.linkedin.com/in/miriamgagu?trk=profile-badge'>Miriam García Guzmán</a></div> */}
            </content>
            </div>
            </div>
        )
    }
}


export default Contact;