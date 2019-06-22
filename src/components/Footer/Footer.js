import React, {Component} from 'react';
import {Footer, FooterSection, FooterLinkList, Button} from 'react-mdl';
import {Link} from 'react-router-dom';
import './footer.css'
import Resume from '../Resume/resume'

class MainFooter extends Component{
    render(){
        return(
            <footer>
                <Footer size="mini">
                    <FooterSection>
                        <FooterLinkList>
                            <Button id="resume-btn">
                            <Resume/>
                            </Button>
                        {/* <Link to="/aboutme">About Me</Link> */}
                        {/* <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link> */}
                        </FooterLinkList>
                        
                    </FooterSection>
                    <FooterSection type="bottom">
                        <Link to="/" id="made-with">
                        Made with <i class="fab fa-react"></i> + <i class="fab fa-gratipay"></i> and <i class="far fa-clock"></i> . 
                        </Link>
                    </FooterSection>
                    
                </Footer>
            </footer>
        );
    }
}

export default MainFooter;