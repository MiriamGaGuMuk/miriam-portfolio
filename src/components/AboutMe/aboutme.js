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
                    <h2 className="title">Y así llegué a ser FullStack Developer </h2>
                    <br/>
                    <p className="aboutBodyTxt">
                        When you find that thing that you are made for is amazing, the feeling has no description. When I started studying music I knew
                        I want to do this my whole life. It wasn't easy at all, not everything is cool parties and have fun all the time in the composition process, not at all,
                        but I have always thought that doing what you love make it easier, more joyful and it was for me.

                        I had to quit to my music career when I had a little accident when I was playing basketball, at the beggining I never thought the injury wasn't that bad, I was wrong.
                        I used to play piano, violin and guitar.
                        After 12 years I realized that I could've continued with my carrer but it was very painful for me not to be able to paly what was in my mind
                        and although I could've write it and someone could play it, at least for me it's not the same.

                        When I started with the tech world I found some familiar patrons that you also can find in the software development, you need to be very
                        proactive, practice a lot cause reading the documentation it's not enogh, you'l find a lot of obstacles but not giving up is the key, creativity is necessary for both,
                        this last one could sound a little bit crazr but you have to be creative in sofware development too, it helps you to find the best solution for each problem, to ccreate awesome web pages, 
                        to contribute and grow up faster in your carrer.

                        Thta's why I choose like a second path Full stack web development.

                        Throgh my webpage you can find so many image that maybe won't make sense, butI tried to represent my differents stages and how I ended choosing became a developer.

                        I have always been hunger for learn new thing, sometimes by myself (most of the time), developers, the successful ones that I have the pleaseure to meet,
                        all of them have this partical feature.

                        I have worked in some many quadrants, from music, to beaty industry, health sector, the gastronomic world and ended in this incredible tech world.
                        What I have learn lately is that 
                    </p> 
                </section>

                <div className="pimg2">
                    <div>
                    <div className="ptext">
                    Projects
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