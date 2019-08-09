import React, {Component} from 'react';
import './aboutme.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import {Chip, ChipContact} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <React.Fragment>
            <div id="root">
            <div className="pimg1">
                    <div className="ptext">
                    <span className="border">
                        Full Stack Web Developer
                    </span>
                    </div>
                </div>

                <section className="section section-light">

                    <h1 className="title">
                     <span>M</span>
                     <span>i</span>
                     <span>r</span>
                     <span>i</span>
                     <span>a</span>
                     <span>m</span>
                    </h1>
                    <ScrollAnimation animateIn="fadeIn"> 
                    <p className="aboutBodyTxt">
                        
                    <strong>¿Quién soy?</strong>
                    <br/>
                    Melómana, amante de los viajes y otras culturas,
                    altermundista, contestataria, indómita, agnóstica, pragmática, subversiva e insurrecta
                    <br/>
                    Confío en que crearemos un mejor lugar.</p>
                    <p className="aboutBodyTxt">
                    <strong>Cambio de carrera</strong>
                    <br/>
                       De ser un músico a un desarrollador no ha sido fácil y muchos preguntan ¿por qué? ¿cómo fue esa transición?
                       Casi siempre doy la misma respuesta "y... ¿por qué no?
                    </p> 
                    <p className="aboutBodyTxt">
                    Mucho se habla dentro del mundo tech (al menos en mi experiencia) sobre salirse de la zona de confort, aprender algo nuevo todos los días, bueno para mí, está fue mi
                    forma de aprender algo nuevo y salirme de mi zona de confort.

                    Otro punto por el que decidí también aprender a programar es porque todo lo que se pueda digitalizar, se digitalizará, lo que se pueda conectar, se conectará y lo que se pueda analizar, se analizará.
                    Cuando me decidí a tomar este rumbo me dí cuenta que el software está en todas partes, estamos viviendo una época de automatización inminente.
                    <br/>
                    Mi primer pensamiento fue estudiar la carrera de Desarrollo en Software, así lo estoy haciendo, pero hablando con varios que se dedican a esta absorbente y demandante carrera
                    todos hicieron el mismo comentario "Nos enseñaron a programar hasta lo último de la carrera y no fue mucho" hago un paréntesis aquí, si bien es cierto que no les enseñaron a "programar"
                    si les enseñaron a tener un pensamiento de abstracción. Me dí entonces a buscar "algo" donde pudiera aprender en poco tiempo o que me diera una pequeña idea de por donde empezar y lo encontré
                    Bootcamps.
                    Hay muchas opiniones encontradas respecto a estos programas, en lo personal, no estoy ni completamente a favor ni en contra en su totalidad, considero que todavía es un campo muy nuevo
                    y que se tendrá que ir explorando. 
                    <br/>
                    <br/>
                    Retomando el hilo, estuve en dos bootcamps, Laboratoria y Muktek aprendí mucho de ambos aunque el primero no lo terminé por cuestiones personales. Es retador todo el tiempo que lo tomas, me puso al límite todo el tiempo
                    me cuestioné, caí, lloré, me sentí la más tonta del mundo, dudé de mi pero, mentiría si dijera que no aprendí. Estos procesos son muy personales, en mi opinión, demandan mucho mentalmente
                    y no todos y me incluyo, somos capaces de sobrellevar el proceso pero el éxito en cada uno de los pequeños o grandes proyectos es indefinible.
                    <br/>
                    <br/>
                    De lo mejor que puedes tener es estos procesos son los amigos, conocidos y contactos, las experiencias que adquieres en el entorno personal son igual (me atrevo a decir más) de satisfactorias que las técnicas. En mi generación de Muktek
                    "LAMAT" la complicidad que hubo todo el tiempo, la amistad que se generó y las experiencias vividas fueron únicas y enriquecedoras (perdón a nuestro instructor por los malos ratos que le hicimos pasar de ser así).
                 </p>
                 <p className="aboutBodyTxt">
                    No tengo idea de a donde me llevará este nuevo camino, pero si voy a cometer errores que sean nuevos, además he aprendido en este proceso que los errores son el mejor maestro. Adoro los misterios, hay partes que parecen no encajar, pero al final lo hacen y todo cobra sentido.
                 </p>
                 </ScrollAnimation> 
                </section>
                
                <div className="pimg2">
                    <div>
                    <div className="ptext">
                    <span className="border">Proyectos</span>
                    </div>
                    
                    </div>
                </div>
                
                <section className="section section-dark">
                    <div>
                        <Projects/>
                    </div>
                </section>

                <div className="pimg3">
                    <div className="ptext">
                    <span className="border">
                        Habilidades
                    </span>
                    </div>
                </div>

                <section className="section section-dark">
                <div className="skills">
                <div>
                    <h4>Desarrollo</h4>
                <Chip>
                <ChipContact style={{ background: 'url("http://www.iconninja.com/files/541/586/346/command-language-software-develop-code-programming-javascript-icon.png") 0 0 / cover' }}/>
                    JavaScript
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://video-react.js.org/assets/logo.png") 0 0 / cover' }}/>
                    ReactJS
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/square_256/nodejslogo.png") 0 0 / cover' }}/>
                    NodeJs
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://www.weheartswift.com/wp-content/uploads/2017/05/Firebase_16-logo.png") 0 0 / cover' }}/>
                    Firebase
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://3.bp.blogspot.com/-NLgOIL0vKJg/W0yrvqx8ZsI/AAAAAAAABfg/l7fFkNQf5S02YIanj4H9KKWiZJNmSlKigCLcBGAs/s1600/mongodb.png") 0 0 / cover' }}/>
                    MongoDB
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://gurayyarar.gallerycdn.vsassets.io/extensions/gurayyarar/expressjs-4-snippets/1.0.2/1512033439660/Microsoft.VisualStudio.Services.Icons.Default") 0 0 / cover' }}/>
                    Express
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://d2.alternativeto.net/dist/icons/koa_37212.png?width=128&height=128&mode=crop&upscale=false") 0 0 / cover' }}/>
                    Koa
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://justcodeit.io/wp-content/uploads/Git_icon.svg_.png") 0 0 / cover' }}/>
                    Git
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67") 0 0/ cover' }}/>
                    Github
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("http://cdn.slidesharecdn.com/profile-photo-GitLab-96x96.jpg?cb=1523568873") 0 0 / cover' }}/>
                    Gitlab
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("http://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/autotweet-documentationhow-to-own-facebook-heroku-app/heroku.png") 0 0 / cover' }}/>
                    Heroku
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://d2.alternativeto.net/dist/icons/netlify-cms_89329.png?width=200&height=200&mode=crop&upscale=false") 0 0 / cover' }}/>
                    Netlify
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://chocolatey.org/content/packageimages/sass.1.20.1.png") 0 0 / cover' }}/>
                    Sass
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://dl.myket.ir/newresizing/resize/medium/png/icon/8bb568f0-66f2-4093-a3fc-9794c499d93c_.png") 0 0 / cover' }}/>
                    Materialize
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://d2.alternativeto.net/dist/icons/bulma_95302.png?width=128&height=128&mode=crop&upscale=false") 0 0 / cover' }}/>
                    Bulma
                </Chip>
                </div>
                </div>
                <div className="skills">
                <div>
                    <h4>Diseño</h4>
                    <Chip>
                <ChipContact style={{ background: 'url("https://www.avisosbogota.com/wp-content/uploads/2018/03/photoshop.png") 0 0 / cover' }}/>   
                    PhotoShop 
                </Chip>
                </div>
                <div>
                    <Chip>
                    <ChipContact style={{ background: 'url("http://www.myiconfinder.com/uploads/iconsets/256-256-573475efcae06860982aede57d9fd33b-illustrator.png") 0 0 / cover' }}/>   
                    Illustrator
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://img.informer.com/icons/png/128/3378/3378600.png") 0 0 / cover' }}/>   
                    Magix Deluxe Video
                </Chip>
                </div>
                <div>
                <Chip>
                <ChipContact style={{ background: 'url("https://www.softexia.com/wp-content/uploads/2017/09/MAGIX_Photostory_Deluxe.png") 0 0 / cover' }}/>   
                    Magix Photostory Deluxe
                </Chip>
                </div>
                <div>
                    <h4>Extras</h4>
                <Chip>
                <ChipContact style={{ background: 'url("https://www.macupdate.com/images/icons256/21404.png?d=1551351949") 0 0 / cover' }}/>   
                    Melodyne
                </Chip>
                </div>
                <div>
                    <Chip>
                    <ChipContact style={{ background: 'url("https://www.macupdate.com/images/icons256/21404.png?d=1551351949") 0 0 / cover'}}/>
                        Nuendo
                    </Chip>
                    </div>
                
                <div>
                    <h4>Idiomas</h4>
                    <Chip>
                    <ChipContact style={{ background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY7WMZwWEfZShKetKk5TzyJ7dwOc0xmfZaPleGpd1y6m0hlrm") 0 0 / cover' }}/>   
                        Español(nativo)
                    </Chip>
                </div>
                <div>
                    <Chip>
                    <ChipContact style={{ background: 'url("https://image.flaticon.com/icons/png/128/197/197484.png") 0 0 /cover'}}/>
                        Inglés(Avanzado)
                    </Chip>
                </div>
                <div>
                    <Chip>
                    <ChipContact style={{ background: 'url("http://www.iconarchive.com/download/i86200/custom-icon-design/round-world-flags/Germany.ico") 0 0 / cover'}}/>
                        Alemán(Básico)
                    </Chip>
                </div>
                </div>
                </section>

                <div className="pimg4">
                    <div className="ptext">
                    <span className="border">
                        To be continued . . . 
                    </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2 id="contacto">Contacto</h2>
                   <Contact/>
                </section>
            </div>
            </React.Fragment>
        )
    }
}

export default About;