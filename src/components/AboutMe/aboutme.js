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
                        Miriam Story Line
                    </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h2>🎵Composición musical🎵</h2>
                    <br/>
                    <p>
                    A una temprana edad sabía que la música sería una parte importnte en mi vida y lo fue. Mi prime acercamiento con la música fue en la secundaria, clases de música,
                generalmente sólo se da un instrunento en general en las secundaria públicas <strong>flauta</strong>, pero el solfeo fue mi parte favorita, desde ese punto supe que la música 
                y todo lo que implicaba era para mi.
                Años después entre a Fermata, donde conocí no solo a personal increibles, pero también mi mundo dio un giro de 360°. El piano siempre fue para mi un instrumento mágico
                así que ese fue el instrumento principal en mi enfoque de aprendizaje, pero siempre he sido una persona muy inquieta, no me basto con el piano, seguí con guitarra y violín.

                Quienes han estudiado música no me dejaran mentir, especializarse en algún instrumento no es sencillo, requiere dedicación, diciplina y esfuerzo
                    </p>
                </section>

                <div className="pimg2">
                    <div className="ptext">
                    <span className="border">
                    <Projects />
                    </span>
                    </div>
                </div>
                
                <section className="section section-dark">
                    <h2>Projects</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
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