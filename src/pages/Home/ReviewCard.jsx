import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { description, userName, ratings, user_photoURL } = review
    return (
        <div className="card bg-base-200 p-6 text-center relative border border-base-300">
            {/* Quotation Icon */}
            <div className="text-secondary text-3xl mb-4">
                <FaQuoteLeft />
            </div>

            {/* Quote Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {description}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-secondary w-50 mx-auto mb-5"></div>

            {/* Attribution */}
            <div className="flex  items-center gap-1">
                <div className="w-10 h-10 rounded-full border border-secondary">
                    <img src={user_photoURL} alt="" className='rounded-full' />
                </div>
                <div className='ml-5'>
                    <h3 className="text-md font-semibold text-secondary">{userName}</h3>
                    <p className="text-sm text-gray-500">{ratings}</p>
                </div>
            </div>
        </div>

    );
};

export default ReviewCard;