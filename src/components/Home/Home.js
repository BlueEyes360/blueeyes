import React from 'react';

import MediaQuery from 'react-responsive';

import HomeElements from './HomeElements/HomeElements';

import './Home.css';

const Home = (props) => {
    return (
        <>
            <MediaQuery minDeviceWidth={1001}>
                <HomeElements size="big"/>
            </MediaQuery>
            <MediaQuery minDeviceWidth={500} maxDeviceWidth={1000}>
                <HomeElements size="medium"/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={499}>
                <HomeElements size="small"/>
            </MediaQuery>
        </>
    )
}

export default Home;