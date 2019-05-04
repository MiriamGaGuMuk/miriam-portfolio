import React, {Component} from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {Link} from 'react-router-dom';
import './footer.css'

class MainFooter extends Component{
    render(){
        return(
            <footer>
                <Footer size="mini">
                    <FooterSection type="bottom" logo="MiriamGaGu">
                        <FooterLinkList>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </footer>
        );
    }
}

export default MainFooter;