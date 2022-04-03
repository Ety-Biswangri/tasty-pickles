import React from 'react';
import pickles1 from '../../Assets/Images/pickles1.jpg';
import './Home.css';

const Home = () => {
    return (
        <div style={{ margin: "30px" }}>
            <div className='home-page-first-portion'>
                <div className='home-page-first-portion-left'>
                    <div>
                        <h1>Your Favourite Pickle</h1>
                        <h2 style={{ marginBottom: '13px' }}>Mango Pickle! The Taste of Nostalgia</h2>
                        <p>
                            Product Description: Mango, Mustard oil, Spices, Herbs and Salt.
                        </p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className='home-page-first-portion-right'>
                    <img src={pickles1} alt="pickleImage" />
                </div>
            </div>
            <div className='home-page-second-portion'>
                <h2>Customer Reviews</h2>
            </div>
        </div>
    );
};

export default Home;