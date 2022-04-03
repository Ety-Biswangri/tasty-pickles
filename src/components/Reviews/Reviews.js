import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2>What Our Customers Say!</h2>
            {
                reviews.map(review => <div>
                    customer name: {review.name};
                </div>)
            }
        </div>
    );
};

export default Reviews;