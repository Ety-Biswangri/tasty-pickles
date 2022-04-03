import React, { useEffect, useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    // console.log(reviews);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <h2>What Our Customers Say!</h2>

        </div>
    );
};

export default Reviews;