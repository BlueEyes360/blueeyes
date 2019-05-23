import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import goldMedal from '../../assets/128px-gold-medal-png-clipart-3Ht2dx.png';
import bronzeMedal from '../../assets/bronze_medal.png';
import recipezSnap from '../../assets/Recip-ezSnap.PNG';
import prettypicturesSnap from '../../assets/pretty-pictures-snap.PNG';
import DMPSSnap from '../../assets/DMPSSnap.png';
import ELCLogo from '../../assets/ELCLogo.png';
import EyeLogo from '../../assets/eye_transBG.png';
import bthompsonSnap from '../../assets/bthompsonSnap.png';

import './Projects.css';

const Projects = (props) => {

    return (
        <>
            <h1>Some Projects That I Have Worked On</h1>
            <Container fluid>
            <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={recipezSnap}/>
                            <Card.Header>
                                <p className="ProjectsCardHeader">
                                    <b>Team Leader</b><br/>
                                    Crimson Code 2019
                                </p>
                                <p className="ProjectsCardHeaderSubtitle">
                                    3rd Place Junior/Senior Track
                                    <img src={bronzeMedal} alt="Bronze Medal" className="float-right" id="BronzeMedal"></img>
                                </p>
                                <p className="ProjectsCardHeaderSubtitle">
                                    Best Domain Name
                                    <img src={goldMedal} alt="Gold Medal" className="float-right" id="GoldMedal"></img>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Recip-ez</Card.Title>
                                <Card.Text className="CardText">
                                    Recip-ez was developed during the Crimson Code hackathon at Washington State University in Pullman.<br/>
                                    The intention was to create a React.JS web based application that would allow users to take a picture of their refrigerator or cabinet
                                    and then extrapolate the recipes that users could make from those ingredients.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={prettypicturesSnap}/>
                            <Card.Header>
                                <p className="ProjectsCardHeader">
                                    <b>Personal Project</b>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>pretty-pictures</Card.Title>
                                <Card.Text className="CardText">
                                    This web-based React.JS application was designed as an experiment with learning how to work with the library and its many features.<br/>
                                    Using the Harvard Art Museum API the application pulls images and their credit info and then displays the image to the user.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={DMPSSnap}/>
                            <Card.Header>
                                <p className="ProjectsCardHeader">
                                    <b>Lead Designer and Developer</b>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Driver Max Profit System</Card.Title>
                                <Card.Text className="CardText">
                                    This C# based program was built in Windows Presentation Format as a class project for CptS 322 at Washington State University.<br/>
                                    The goal was to create a system that would retrieve, select, perform and visualize rides provided by the instructor's database. The final
                                    presentation was done as a competition with the other teams in the class to see who would make the most profit in a 30 minute timespan.<br/>
                                    Google Maps and Firebase were used extensively throughout the project.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={ELCLogo}/>
                            <Card.Header>
                                <p className="ProjectsCardHeader">
                                    <b>Developer</b><br/>Dubhacks 2018
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Evaluating Local Candidates</Card.Title>
                                <Card.Text className="CardText">
                                    Evaluating Local Candidates was developed with a team from Coding Cougs during Dubhacks 2018 at the University of Washington in Seattle, Washington.<br/>
                                    This application would use Google's Civic API, Propublica's API, and a web scraper to collect information from the VoteSmart.org website. The user would be prompted for their
                                    location and then displayed a list of all the candidates that are running for office in their local, state, and national races. Once they selected a race
                                    information about the candidates would be displayed.<br/>
                                    The intent was to make this as an Android app, but due to the limited time frame we were unable to get past the data collection portion of the process.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={EyeLogo}/>
                            <Card.Header>
                                <p className="ProjectsCardHeader">
                                    <b>Developer and Administrator</b>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>blueeyes.dev</Card.Title>
                                <Card.Text className="CardText">
                                    This website! I bet you can kind of guess what goes here yourself if you've gotten this far!<br/>
                                    This has been developed in React.JS and uses GitHub pages for hosting. Google Domains is used for domain registration. Google Firebase is used for picture and file storage.<br/>
                                    Yes, I am aware that I use a lot of Google stuff. Its pretty easy to use and I highly recommend most of it. Great documentation and service!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={bthompsonSnap}/>
                            <Card.Header>
                                <p className="ProjectsCardHeader">
                                    <b>Developer and Administrator</b>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>bthompson.org</Card.Title>
                                <Card.Text className="CardText">
                                    My first attempt at creating a personal website.<br/>
                                    This was registered originally through Domain.com, though since it has been transferred to Google Domains. Created through the website builder that is
                                    provided through Domain.com this website is relatively clean and well done, though customization is limited and difficult to do. Once the domain was
                                    transferred to Google Domains the ability to modify it was broken. Currently hosted by GitHub Pages and it is my next project to modify and update it.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={4}>
                        <p className="Credits">
                            "Gold medal PNG" by Cliparthut.com is licensed under CC BY 4.0<br/>
                        </p>
                    </Col>
                    <Col lg={4}>
                        <p className="Credits">
                            "Bronze medal png" by searchpng.com 2019<br/>
                        </p>
                    </Col>
                    <Col lg={4}>
                        <p className="Credits">
                            All other images © Bobby Thompson 2019
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Projects;