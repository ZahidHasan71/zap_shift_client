import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Review from './Review';
import Work from './Work';
import Service from './Service';

const reviewPromise = fetch('/reviews.json')
    .then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Service></Service>
            <Brands></Brands>
            <Review reviewPromise={reviewPromise}></Review>
        </div>
    );
};

export default Home;