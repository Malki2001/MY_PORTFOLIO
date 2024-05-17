import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';
import profile from '../assets/img/profile.jpg';

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>About Me</h2>
              <div className="about-img">
                <img src={profile} alt="Profile" />
                <span className='circle-spin'></span>
              </div>

              <p>
                I am a passionate and detail-oriented Frontend Web Developer, Web Designer, and UI/UX Designer, dedicated to crafting seamless and engaging user experiences. With a robust foundation in HTML, CSS, JavaScript, and modern frameworks such as React and Flutter, I excel in developing responsive, accessible, and visually compelling websites and mobile applications.
                My passion lies in creating captivating website designs and mobile applications, and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly interfaces.
              </p>

              {showMore && (
                <p>
                  I believe that a well-designed website or mobile app should not only look visually appealing but also provide a smooth and enjoyable interaction for users. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity.
                </p>
              )}

              <button className='read-more' onClick={handleReadMore}>
                <span>{showMore ? 'Show Less' : 'Read More'}</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <img className='background-image-left' src={colorSharp} alt="Background Decoration" />
    </section>
  );
}

export default AboutMe;
