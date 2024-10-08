import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Review {
    id: number;
    name: string;
    review: string;
}

const Review = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [name, setName] = useState<string>('');
    const [review, setReview] = useState<string>('');

    // Fetch reviews from the backend
    const fetchReviews = async () => {
        const response = await axios.get('http://localhost:5000/reviews');
        setReviews(response.data);
    };

    // Handle form submission to add a review
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/reviews', { name, review });
        setName(''); // Clear input
        setReview(''); // Clear input
        fetchReviews(); // Refresh reviews
    };

    // Handle deleting a review
    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:5000/reviews/${id}`);
        fetchReviews(); // Refresh reviews
    };

    // Fetch reviews when component mounts
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className="flex flex-col items-center bg-blue-950 border-2 border-white p-4" id='review'>
            <h1 className="text-4xl font-bold mb-4">Reviews</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-md mx-auto p-8 bg-blue-950 rounded-md shadow-md border-2 border-white"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="p-4 mb-4 text-2xl"
                />
                <textarea
                    placeholder="Your Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    className="p-4 mb-8 text-2xl"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md text-3xl"
                >
                    Submit Review
                </button>
            </form>
            <ul className="flex flex-col w-full max-w-md mx-auto p-4">
                {reviews.map((rev) => (
                    <li key={rev.id} className="flex items-center justify-between mb-2">
                        <div>
                            <strong>{rev.name}</strong>
                            <p className="text-sm">{rev.review}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(rev.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Review;


