import React, {Component} from 'react';
import './navBar.css'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';


class NavBar extends Component{
    render() {
        return(
            <React.Fragment>
            <div className="navBarMain">
                <Layout id="navHeader">
                    <Header  transparent>
                        <Navigation className="menu-links">
                        {/* <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link> */}
                        </Navigation>
                    </Header>
                    <Drawer title="MiriamGaGu">
                        <Navigation className="menu-links">
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                    </Content>
                </Layout>
            </div>
        </React.Fragment>
        
        
        );
    }
}
export default NavBar;
