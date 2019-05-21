import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import headshot from '../../../assets/suit_background_blurred.png';
import '../Home.css';

const HomeElements = (props) => {

    var NameLineClass;
    var SubTitleClass;
    var AboutMeSpacerOutside;
    var AboutMeSpacerInside;
    var JumbotronSpacerInside;
    var JumbotronSpacerOutside;

    if(props.size === "small")
    {
        NameLineClass = "NameLineSmall";
        SubTitleClass = "SubTitleSmall";
        AboutMeSpacerOutside = 1;
        AboutMeSpacerInside = 10;
        JumbotronSpacerInside = 12;
        JumbotronSpacerOutside = 0;
    }

    if(props.size === "medium")
    {
        NameLineClass = "NameLineMedium";
        SubTitleClass = "SubTitleMedium";
        AboutMeSpacerOutside = 3;
        AboutMeSpacerInside = 6;
        JumbotronSpacerInside = 10;
        JumbotronSpacerOutside = 1;
    }

    if(props.size === "big")
    {
        NameLineClass = "NameLine";
        SubTitleClass = "SubTitle";
        AboutMeSpacerOutside = 3;
        AboutMeSpacerInside = 6;
        JumbotronSpacerInside = 8;
        JumbotronSpacerOutside = 2;
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={JumbotronSpacerOutside}/>
                <Col xs={JumbotronSpacerInside}>
                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col>
                                    <Image src={headshot} className="Headshot"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className={NameLineClass}>Robert "Bobby" Thompson</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className={SubTitleClass}>Senior at Washington State University</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className={SubTitleClass}>Vice President of Coding Cougs</p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col xs={JumbotronSpacerOutside}/>
            </Row>
            <Row>
                <Col xs={AboutMeSpacerOutside}/>
                <Col xs={AboutMeSpacerInside}>
                    <p className="AboutMe">
                        My name is Bobby Thompson. I am currently a student at Washington State University studying for a Bachelor's Degree in Computer Science. As a member of the
                        club Coding Cougs I enjoy helping to lead the organization on campus and during hackathons.
                    </p>
                    <p className="AboutMe">
                        I am currently expanding my learning in the React.JS library as well as the Javascript and Python programming languages. I have a thirst for learning new
                        and innovative technologies.
                    </p>
                    {/* <p>
                        Outside of programming my hobbies include hiking, camping, amateur photography, travelling, exploring new locations, and playing pool.
                    </p> */}
                </Col>
                <Col xs={AboutMeSpacerOutside}/>
            </Row>
        </Container>

    )
}

export default HomeElements;