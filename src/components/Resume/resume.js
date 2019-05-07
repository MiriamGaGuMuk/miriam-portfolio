import React, {Component} from 'react'
import './resume.css'
import {Link} from 'react-router-dom'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl'

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
              <p>Muktek Academy</p>
              <p>PuraScents</p>
              <p>CompuCom</p>
              <div>
                  <h3>Tecnologías Software</h3>
                  <input type="radio"/>
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