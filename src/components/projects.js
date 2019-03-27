import React, {Component} from 'react'

class Projects extends Component{
    render(){
        return(
            <div className="card">
                <div className="face face1">
                    <img src={require('../assets/activity-adventure-backlit-450062.png')}/>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h2>Hello There</h2>
                        <p>A little descriptin of the project</p>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Projects;