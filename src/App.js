import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import AboutMe from './components/AboutMe/aboutme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='App'>
        <NavBar/>
        <Switch>
            <Route exact path='/aboutme' component={AboutMe}/>
            {/* <Route exact path='/contact' component={Contact}/>
            <Route exact path='/projects' component={Projects}/> */}
        </Switch>
        </div>
        <AboutMe/>
        <Footer/>
        </React.Fragment>
    );
  }
}

export default App;



