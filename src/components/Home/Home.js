import React from 'react';
import pickles from '../../Assets/Images/pickles.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-page-first-portion'>
                <div className='home-page-first-portion-left'>
                    <div style={{ marginLeft: '100px' }}>
                        <h1>Your Favourite Pickles</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus.
                        </p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className='home-page-first-portion-right'>
                    <img src={pickles} alt="pickleImage" />
                </div>
            </div>
            <div className='home-page-second-portion'>
                <h2>Customer Reviews</h2>
            </div>
        </div>
    );
};

export default Home;