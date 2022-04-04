import React from 'react';
import './About.css';
import about from '../../Assets/Images/about.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <h2 style={{ order: '2' }}>Coming Soon</h2>
                <br />
                <div style={{ order: '1' }}>
                    <img src={about} alt="aboutUsImage" />
                </div>
            </div>
        </div>
    );
};

export default About;