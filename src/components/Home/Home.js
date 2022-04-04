import { useNavigate } from 'react-router-dom';
import pickles1 from '../../Assets/Images/pickles1.jpg';
import useReviews from '../../hooks/useReviews';
import './Home.css';

const Home = () => {
    const [reviews] = useReviews();
    const reviewSlice = reviews.slice(0, 3);
    const navigate = useNavigate();

    return (
        <div style={{ margin: "30px" }}>
            <div className='home-page-first-portion'>
                <div className='home-page-first-portion-left'>
                    <div>
                        <h1>Tasty Pickle</h1>
                        <h2 style={{ marginBottom: '13px' }}>Mango Pickle! The Taste of Nostalgia</h2>
                        <p>
                            Product Ingredients: Mango, Mustard oil, Spices, Herbs and Salt.
                        </p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className='home-page-first-portion-right'>
                    <img src={pickles1} alt="pickleImage" />
                </div>
            </div>
            <div className='home-page-second-portion'>
                <h2 style={{ color: 'rgb(25, 25, 112)' }}>
                    Customer Reviews
                </h2>
                <div className='home-page-review-container'>
                    {
                        reviewSlice.map((review) => <div key={review.id} className="home-page-single-review-container">
                            <div className='home-page-single-review'>
                                <img src={review.img} alt="personImage" />
                                <h3>{review.name}</h3>
                                <div style={{ marginBottom: '35px' }}>
                                    <blockquote>
                                        {review.review}
                                    </blockquote>
                                </div>
                                <p><small style={{ fontSize: '16px', fontWeight: '600' }}>Ratings: {review.ratings}</small></p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='button'>
                    <button onClick={() => navigate('/reviews')}>See All Reviews</button>
                </div>
            </div>
        </div >
    );
};

export default Home;