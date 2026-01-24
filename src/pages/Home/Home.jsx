import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Reviews from './Reviews';
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
            <Reviews reviewPromise={reviewPromise}></Reviews>
        </div>
    );
};

export default Home;