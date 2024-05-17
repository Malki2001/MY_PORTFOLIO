import React from 'react';
import { NavItem, NavLink, Col, Row, Nav, Container, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';

function Projects() {
    const projects = [
        { title: "Business startup", description: "Design & Deployment", imgUrl: projImg1 },
        { title: "Business startup", description: "Design & Deployment", imgUrl: projImg2 },
        { title: "Business startup", description: "Design & Deployment", imgUrl: projImg3 },
        { title: "Business startup", description: "Design & Deployment", imgUrl: projImg1 },
        { title: "Business startup", description: "Design & Deployment", imgUrl: projImg2 },
        { title: "Business startup", description: "Design & Deployment", imgUrl: projImg3 },
    ];

    const getProjectSlice = (startIndex, endIndex) => {
        return projects.slice(startIndex, endIndex);
    };

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                                    <h2>Projects</h2>
                                    <p>Each of these projects showcases my skills in creating visually appealing, user-friendly interfaces and developing responsive, functional web applications.</p>
                                </div>
                            }
                        </TrackVisibility>

                        <Tab.Container id='projects-tab' defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/first">
                                <NavItem>
                                    <NavLink eventKey="first">Tab One</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Tab Two</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="third">Tab Three</NavLink>
                                </NavItem>
                            </Nav>

                            <Tab.Content className='tab-content'>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {getProjectSlice(0, 3).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {getProjectSlice(3, 6).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {getProjectSlice(6, 9).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="Background" />
        </section>
    );
}

export default Projects;
