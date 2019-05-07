import React, {Component} from 'react'
import './resume.css'
import {Link} from 'react-router-dom'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl'
// import Rate from 'rc-rate'

class Resume extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
              
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
    
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
              
    render() {

      return (
        <div>
          <Link to='/' onClick={this.handleOpenDialog}>Resume</Link>
          <Dialog id="dialog" open={this.state.openDialog} onCancel={this.handleCloseDialog}>
            <DialogTitle>
                <h3>Miriam García Guzmán</h3>
            </DialogTitle>
            <DialogContent className="dialog-content">
              <h4>FullStack Web Developer</h4>
              <div>
                  <div className="resume-info">
                    <span><i className="fas fa-at"></i> miriam.garci.guzman.novy@gmail.com</span>
                    <span><i className="fas fa-mobile-alt"></i> 5512894295</span>
                    <br/>
                    <span><i className="fas fa-map-marker-alt"></i> Álvaro Obregón, CDMX</span>
                    <span><i className="fas fa-female"></i> Edad: 31</span>
                    <br/>
                    <span><i className="fab fa-github"></i> /MiriamGaGuMuk</span>
                    <span><i className="fab fa-gitlab"></i> /MiriamGaGu</span>
                    <span><i className="fab fa-linkedin-in"></i> /miriamgagu</span>
                    <br/>
                </div>
            
                  <h3>Idiomas</h3>
                  {/* <input name="rate" type="radio" value="3"/> */}
                  <div className="rate">
                    <span className="rating">Inglés</span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <br />
                    <span className="rating">Alemán</span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                  </div>
              </div>
            
            </DialogContent>
            <DialogActions>
              <Button id="close-dialog" type='button' onClick={this.handleCloseDialog}><i class="far fa-times-circle"></i> Close </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}


export default Resume;