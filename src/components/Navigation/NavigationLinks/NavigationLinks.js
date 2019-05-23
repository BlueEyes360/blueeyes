import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import Resume from '../../../assets/Bobby_Resume_v3_online.pdf';


const NavigationLinks = (props) => {

    return (
        <Nav className="mx-auto">
            <Nav.Item>
                <NavLink exact to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <a href={Resume}>Resume</a>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/gallery">Gallery</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/projects">Projects</NavLink>
            </Nav.Item>
        </Nav>
    )
}

export default NavigationLinks;