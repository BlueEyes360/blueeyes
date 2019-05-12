import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import headshot from './assets/suit_background_blurred.png';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Navigation />
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Container>
                                <Row>
                                    <Col xs={1}/>
                                    <Col xs={10}>
                                        <Image src={headshot} className="Headshot"/>
                                    </Col>
                                    <Col xs={1}/>
                                </Row>
                                <Row>
                                    <Col xs={1}/>
                                    <Col xs={10}>
                                        <p className="NameLine">Robert "Bobby" Thompson</p>
                                    </Col>
                                    <Col xs={1}/>
                                </Row>
                                <Row>
                                    <Col xs={1}/>
                                    <Col xs={10}>
                                        <p className="SubTitle">Senior at Washington State University</p>
                                    </Col>
                                    <Col xs={1}/>
                                </Row>
                                <Row>
                                    <Col xs={1}/>
                                    <Col xs={10}>
                                        <p className="SubTitle">Vice President of Coding Cougs</p>
                                    </Col>
                                    <Col xs={1}/>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            
        </div>
        );
    }
}

export default App;