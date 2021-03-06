
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

    viewOnlineES(){
      window.location.href="https://drive.google.com/file/d/15-G6wNM0B1HeJ8YwAl0wXyIhw_rJ_fZ4/view?usp=sharing"
    }

    viewOnlineEN(){
      window.location.href="https://drive.google.com/file/d/1KYiIEm39t5e17HpDQJDH4u0HMxg24zgA/view?usp=sharing"
    }

    downloadES(){
      window.location.href="https://docs.google.com/uc?export=download&id=15-G6wNM0B1HeJ8YwAl0wXyIhw_rJ_fZ4"
    }
    
    downloadEN(){
      window.location.href="https://docs.google.com/uc?export=download&id=1KYiIEm39t5e17HpDQJDH4u0HMxg24zgA"
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
              <Button id="first__link" raised accent ripple onClick={this.viewOnlineES}>
                Ver Online
              </Button>
              <Button raised accent ripple onClick={this.downloadES}>
                <i className="fas fa-download"></i>
              </Button>
              </div>
              <div className="cv__buttons">
                <Button id="first__link" raised accent ripple onClick={this.viewOnlineEN}>
                  Online Inglés
                </Button>
                <Button raised accent ripple onClick={this.downloadEN}>
                   <i className="fas fa-download"> </i> Inglés
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
