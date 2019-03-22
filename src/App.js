import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import linkedin from './assets/if_linkedin_social_media_3129285.png';

import eye from './assets/eye_transBG.png';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                <img alt="" src={eye} width="30" height="30"
                    className="d-inline-block align-top"
                    id="brand"
                />
                {' blueeyes.dev'}
                </Navbar.Brand>
                <Nav fill>
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#linkedin"><Image src={linkedin} className="SocialLinks"/></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Container fluid>
                <Row></Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        <Jumbotron fluid>
                            <p>This is some text inside of the jumbotron</p>
                        </Jumbotron>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default App;
