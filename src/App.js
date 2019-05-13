import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import AboutMe from './components/AboutMe/aboutme';
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
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



