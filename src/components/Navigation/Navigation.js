import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import linkedin from '../../assets/if_linkedin_social_media_3129285.png';
import facebook from '../../assets/if_facebook_social_media_3129294.png';
import github from '../../assets/Octocat.png';
import twitter from '../../assets/if_twitter_social_media_3129254.png';

import eye from '../../assets/eye_transBG.png';


const Navigation = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img alt="" src={eye} width="30" height="30"
                className="d-inline-block align-top"
                id="brand"
            />
            {' blueeyes.dev'}
            </Navbar.Brand>
            <Nav className="mx-auto">
                <Nav.Item>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#aboutme">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className="float-lg-right">
                <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com/in/rhthompson1/"><Image src={linkedin} className="SocialLinks"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="http://www.twitter.com/rhth1986"><Image src={twitter} className="SocialLinks"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.facebook.com/profile.php?id=100007442145159"><Image src={facebook} className="SocialLinks"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.github.com/BlueEyes360"><Image src={github} className="SocialLinks"/></Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Navigation;