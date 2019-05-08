import React, {Component} from 'react'
import './aboutme.css'
import Projects from '../Projects/projects'
import Contact from '../Contact/contact'

class About extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="pimg1">
                    <div className="ptext">
                    <span className="border">
                        Miriam
                        <br/>
                        <br/>
                        <br/>
                        Full Stack Web Developer
                    </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h3 className="title">Y así me convertí en FullStack Developer </h3>
                    <br/>
                    <p className="aboutBodyTxt">
                        ¡¡Hey!!
                        Bienvenid@ a mi página
                    </p>
                    <p className="aboutBodyTxt">
                    <strong>¿Quién soy?</strong>
                    <br/>
                    Melómana, amante de los viajes y otras culturas,
                    altermundista, contestataria, indómita, agnóstica, pragmático, subversivo e insurrecta
                    <br/>
                    Confío en que crearemos un mejor lugar.</p>
                    <p className="aboutBodyTxt">
                    <strong>Cambio de carrera</strong>
                    <br/>
                       De ser un músico a un desarrollador no ha sido fácil y muchos preguntan ¿por qué? ¿cómo fue esa tansición?
                       Casi siempre doy la misma respuesta "y... ¿por qué no?
                    </p> 
                    <p className="aboutBodyTxt">
                    Mucho se habla dentro del mundo tech (al menos en mi experiencia) sobre salirse de la zona de comfort, aprender algo nuevo todos los días, bueno para mi, está fue mi
                    forma de aprender algo nuevo y salirme de mi zona de comfort
                    </p>
                </section>

                <div className="pimg2">
                    <div>
                    <div className="ptext">
                    <span className="border">Proyectos</span>
                    </div>
                    
                    </div>
                </div>
                
                <section className="section section-dark">
                    {/* <h2>Projects</h2> */}
                    <p>
                    <Projects/>
                    </p>
                </section>

                <div className="pimg3">
                    <div className="ptext">
                    <span className="border trans">
                        Image Three Text
                    </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section Three</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
                    </p>
                </section>

                <div className="pimg4">
                    <div className="ptext">
                    <span className="border">
                        To be continued . . . 
                    </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Contact</h2>
                   <Contact/>
                </section>
            </React.Fragment>
        )
    }
}

export default About;