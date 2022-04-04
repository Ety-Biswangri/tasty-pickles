import useReviews from '../../hooks/useReviews';
import './Reviews.css';

const Reviews = () => {

    const [reviews] = useReviews();

    return (
        <div className='review-portion'>
            <h2>What Our Customers Say!</h2>
            <div className='review-container'>
                {
                    reviews.map((review) => <div key={review.id} className="single-review-container">
                        <div className='single-review'>
                            <h3>{review.name}</h3>
                            <div style={{ marginBottom: '35px' }}>
                                <blockquote>
                                    {review.review}
                                </blockquote>
                            </div>
                            <p><small style={{ fontSize: '14px' }}>Ratings: {review.ratings}</small></p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;