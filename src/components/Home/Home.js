import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pickles1 from '../../Assets/Images/pickles1.jpg';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);

    const reviewSlice = reviews.slice(0, 3);
    console.log(reviewSlice);

    const navigate = useNavigate();

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
                {
                    reviewSlice.map((review) => <Reviews ></Reviews>)
                }
                <button onClick={() => navigate('/reviews')}>Click for more reviews</button>
            </div>
        </div>
    );
};

export default Home;