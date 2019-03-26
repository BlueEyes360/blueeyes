import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Navigation />
            <Container fluid>
                <Row className="py-5">
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