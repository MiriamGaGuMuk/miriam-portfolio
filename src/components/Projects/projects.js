import React, {Component} from 'react'
import './projects.css'

class Projects extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="card middle">
                  <div class="front">
                    <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="shot from App" />
                  </div>
                  <div class="back">
                    <div class="back-content middle">
                      <h2>Instagram Clone</h2>
                      <p>A ReactJs App Web From (Front End)</p>
                      <a href="https://instagram-clone-reactjs.netlify.com/"><span>Demo</span></a>
                      <div class="sm">
                        <a href="#https://github.com/MiriamGaGuMuk/instagram-clone-reactjs"><i class="fab fa-github"></i></a>
                        <a href="https://gitlab.com/MiriamGaGu?nav_source=navbar"><i class="fab fa-gitlab"></i></a>
                        <a href="https://www.linkedin.com/in/miriamgagu/"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

            </React.Fragment>
            
        );
    }
}

export default Projects;