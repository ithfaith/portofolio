import React, { useState, useEffect } from 'react';
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
    const [error, setError] = useState<string>('');

    const fetchReviews = async () => {
        const response = await axios.get('http://localhost:5000/reviews');
        setReviews(response.data);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (review.length < 8) {
            setError('Pesan minimal 8 karakter');
            return;
        }
        await axios.post('http://localhost:5000/reviews', { name, review });
        setName(''); // Clear input
        setReview(''); // Clear input
        fetchReviews(); // Refresh reviews
        setError('');
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className="container flex flex-col items-center min-h-screen bg-cover bg-blue-950 p-4 border-2 border-white" id='review'>
            <h1 className="text-2xl font-bold text-white mb-6 flex-justify-center">Reviews</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="p-4 mb-6 text-lg rounded-md border-2 border-gray-400 w-full overflow-ellipsis overflow-hidden"
                />
                <textarea
                    placeholder="Your Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    className="p-4 mb-6 text-lg rounded-md border-2 border-gray-400 w-full"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md text-lg w-full"
                >
                    Submit Review
                </button>
            </form>
            <ul className="space-y-4 mt-8 w-full">
                {reviews.map((rev) => (
                    <li key={rev.id} className="flex justify-start">
                        <div className="chat chat-start w-full">
                            <div className="chat-bubble bg-white text-black flex flex-col max-w-lg w-auto p-4 rounded-lg">
                                <div className="font-bold mb-2">- {rev.name}</div>   
                                <div className="break-words">{rev.review}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Review;

