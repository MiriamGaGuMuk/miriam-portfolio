
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
                <h4>Miriam García Guzmán CV</h4>
            </DialogTitle>
            <DialogContent className="dialog-content">
            <div className="cv__buttons">   
              <Button id="first__link" raised accent ripple>
                <a href="https://drive.google.com/file/d/1CKYCfUzdPRjOs598i-qIMnMOww1Onb7b/view?usp=sharing"></a>Ver Online
              </Button>
              <Button raised accent ripple>
                <a href="https://docs.google.com/uc?export=download&id=1CKYCfUzdPRjOs598i-qIMnMOww1Onb7b"><i className="fas fa-download"></i></a>
              </Button>
              </div>
              <div className="cv__buttons">
                <Button id="first__link" raised accent ripple>
                  <a href="https://drive.google.com/file/d/1AlGKuysK4_sn3yaUGq7XL6Y5zXYMJ3r_/view?usp=sharing">Online Inglés</a>
                </Button>
                <Button raised accent ripple>
                  <a href="https://docs.google.com/uc?export=download&id=1AlGKuysK4_sn3yaUGq7XL6Y5zXYMJ3r_"><i className="fas fa-download"></i> Inglés</a>
                </Button>
              </div>
            </DialogContent>
            <DialogActions>
              <Button id="close-dialog" type='button' onClick={this.handleCloseDialog}><i className="far fa-times-circle"></i> Close </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}


export default Resume;
