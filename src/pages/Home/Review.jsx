import React, { use } from 'react';

const Review = ({ reviewPromise }) => {
    const review = use(reviewPromise);
    console.log(review);
    return (
        <div>

        </div>
    );
};

export default Review;