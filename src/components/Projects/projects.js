import React, {Component} from 'react'
import './projects.css'

class Projects extends Component{
    render(){
        return(
            <React.Fragment>
              
                <div className="card__project">
                  <div className="front">
                    <img src="https://images.pexels.com/photos/1035103/pexels-photo-1035103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="shot from App" />
                  </div>
                  <div className="back">
                    <div className="back-content middle">
                      <h2>Instagram Clone</h2>
                      <p>A ReactJs App Web (Front End)</p>
                      <a href="https://instagram-clone-reactjs.netlify.com/"><span>Demo</span></a>
                      <div className="sm">
                        <a href="#https://github.com/MiriamGaGuMuk/instagram-clone-reactjs"><i className="fab fa-github"></i></a>
                        <a href="https://gitlab.com/MiriamGaGu?nav_source=navbar"><i className="fab fa-gitlab"></i></a>
                        <a href="https://www.linkedin.com/in/miriamgagu/"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  <div className="card__project">
                  <div className="front">
                    <img src="https://images.pexels.com/photos/1851468/pexels-photo-1851468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="shot from App" />
                  </div>
                  <div className="back">
                    <div className="back-content middle">
                      <h2>Greener</h2>
                      <p>Firebase, Vanilla JS</p>
                      <a href="https://instagram-clone-reactjs.netlify.com/"><span>Demo</span></a>
                      <div class="sm">
                        <a href="#https://github.com/MiriamGaGuMuk/instagram-clone-reactjs"><i className="fab fa-github"></i></a>
                        <a href="https://gitlab.com/MiriamGaGu?nav_source=navbar"><i className="fab fa-gitlab"></i></a>
                        <a href="https://www.linkedin.com/in/miriamgagu/"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="card__project">
                  <div className="front">
                    <img src="https://images.pexels.com/photos/2115950/pexels-photo-2115950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="shot from App" />
                  </div>
                  <div className="back">
                    <div className="back-content middle">
                      <h2>Greener</h2>
                      <p>Firebase, Vanilla JS</p>
                      <a href="https://instagram-clone-reactjs.netlify.com/"><span>Demo</span></a>
                      <div className="sm">
                        <a href="#https://github.com/MiriamGaGuMuk/instagram-clone-reactjs"><i className="fab fa-github"></i></a>
                        <a href="https://gitlab.com/MiriamGaGu?nav_source=navbar"><i className="fab fa-gitlab"></i></a>
                        <a href="https://www.linkedin.com/in/miriamgagu/"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                </React.Fragment>
            
        );
    }
}

export default Projects;