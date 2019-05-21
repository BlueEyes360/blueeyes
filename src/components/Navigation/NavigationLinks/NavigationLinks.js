import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavigationLinks = (props) => {

    return (
        <Nav className="mx-auto">
            <Nav.Item>
                <NavLink exact to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/resume">Resume</NavLink>
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