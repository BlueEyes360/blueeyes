import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';

import NavLink from 'react-router-dom/NavLink';

import MediaQuery from 'react-responsive';

import NavigationLinks from './NavigationLinks/NavigationLinks';
import SocialLinks from './SocialLinks/SocialLinks';

import eye from '../../assets/eye_transBG.png';
import './Navigation.css';

const Navigation = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
            <MediaQuery query="(max-device-width: 500px)">
                <Dropdown>
                    <DropdownToggle variant="dark">Menu</DropdownToggle>
                    <DropdownMenu left className="DropMenu">
                        <DropdownItem>
                            <NavLink exact to="/">Home</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to="/resume">Resume</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to="/gallery">Gallery</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to="/projects">Projects</NavLink>
                        </DropdownItem>
                        <SocialLinks />
                    </DropdownMenu>
                </Dropdown>
                <Navbar.Brand href="/" className="ml-auto">
                    <img alt="" src={eye} width="30" height="30"
                        className="d-inline-block align-top"
                        id="brand"
                    />
                    {' blueeyes.dev'}
                </Navbar.Brand>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 500px)">
                <Navbar.Brand href="/">
                    <img alt="" src={eye} width="30" height="30"
                        className="d-inline-block align-top"
                        id="brand"
                    />
                    {' blueeyes.dev'}
                </Navbar.Brand>
                <NavigationLinks />
                <SocialLinks />
            </MediaQuery>
        </Navbar>
    )
}

export default Navigation;