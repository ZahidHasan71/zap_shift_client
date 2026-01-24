import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Reviews from './Reviews';
import Work from './Work';
import Service from './Service';
import Faq from './Faq';
import Choose from './Choose';

const reviewPromise = fetch('/reviews.json')
    .then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Service></Service>
            <Brands></Brands>
            <Choose></Choose>
            <Reviews reviewPromise={reviewPromise}></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;