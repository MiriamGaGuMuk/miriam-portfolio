import React, { Component } from 'react';
import './App.css';
import { Layout,Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {Link} from 'react-router-dom'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div clasName="picNav" style={{height: '100px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header id="navHeader" to='/' title={<span><span style={{ color: '#ffff' }}></span><strong>MiriamGaGu</strong></span>}>
                    <Navigation className="menu-links">
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
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
                <Content/>
              </Layout>
            </div>
          <div>
          <Main/>
        </div>
        <footer>
        <Footer size="mini">
            <FooterSection type="left" logo="Title">
                <FooterLinkList>
                    <Link to="/">Help</Link>
                    <Link to="/">Privacy & Terms</Link>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        </footer>
        </div>
        </React.Fragment>
    );
  }
}

export default App;

// style={{background: 'url(https://github.com/MiriamGaGuMuk/miriam-portfolio/blob/master/src/assets/activity-adventure-backlit-450062.png?raw=true) center / cover'}}