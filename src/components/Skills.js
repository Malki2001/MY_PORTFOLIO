import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from 'react-bootstrap';

import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import meter4 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>In my journey as a developer and designer, I've honed a diverse set of skills that enable me to build robust, user-friendly applications and create compelling visual identities. Below are some of the key areas where I excel:</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>HTML/CSS</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt='image'/>
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt='image'/>
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={meter4} alt='image'/>
                            <h5>Flutter</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Bootstrap</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Version Control (Git)</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Wireframing and Prototyping</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>User Research</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Visual Design</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Interaction Design</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Algorithms and Data Structures</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Database Management</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt='image'/>
                            <h5>Software Developmen</h5>
                        </div>

                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>

       <img className='background-image-left' src={ colorSharp}/>
    </section>
  )
}

export default Skills
