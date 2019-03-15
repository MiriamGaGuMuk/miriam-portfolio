import React, { Component } from 'react';
import './App.css';
import { Layout,Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {Link} from 'react-router-dom'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://github.com/MiriamGaGuMuk/miriam-portfolio/blob/master/src/assets/activity-adventure-backlit-450062.png?raw=true) center / cover'}}>
        <Header to='/' transparent title="MiriamGaGu" style={{color: 'white'}}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="MiriamGaGu">
            <Navigation>
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
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
</footer>
</React.Fragment>
    );
  }
}

export default App;
