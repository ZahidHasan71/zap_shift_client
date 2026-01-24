import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ReviewCard from './ReviewCard';
import customerTop from '../../assets/customer-top.png';

const Review = ({ reviewPromise }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        reviewPromise.then(data => setReviews(data));
    }, [reviewPromise]);

    return (
        <div className="w-full py-16">
            <div className="max-w-2xl mx-auto text-center mb-20">
                <img className="mx-auto mb-5" src={customerTop} alt="" />
                <h1 className="text-secondary text-3xl font-bold">What our customers are saying</h1>
                <p className="text-black">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 80,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{ delay: 2000 }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                className="pb-12"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        {({ isActive }) => (
                            <div
                                className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-30'
                                    }`}
                            >
                                <ReviewCard review={review} />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;