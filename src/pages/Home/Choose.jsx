import React from 'react';

import liveTracking from '../../assets/live-tracking.png'
import safeDelivary from '../../assets/safe-delivery.png'
const Choose = () => {
    return (
        <div className='my-20 mx-20'>
            {/* Divider */}
            <div className="border-t border-dashed border-secondary  mx-auto mt-20"></div>
            <div className='my-18'>
                <div className="text-center">
                    <h2 className='text-2xl font-bold text-secondary my-10 '>Why Choose Us</h2>
                </div>
                <div className="mt-5">
                    <div className="card w-full bg-base-100 shadow-xl my-5 flex flex-row py-5 items-center">
                        <figure className="px-10 pt-10">
                            <img src={liveTracking} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="border-l-2 border-dashed border-secondary h-50 mx-5"></div>
                        <div className="card-body justify-center">
                            <h2 className="card-title">We are here to help you</h2>
                            <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="card w-full bg-base-100 shadow-xl my-5 flex flex-row py-5 items-center">
                        <figure className="px-10 pt-10">
                            <img src={safeDelivary} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="border-l-2 border-dashed border-secondary h-50 mx-5"></div>
                        <div className="card-body justify-center">
                            <h2 className="card-title">100% Safe Delivery</h2>
                            <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and \</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="card w-full bg-base-100 shadow-xl my-5 flex flex-row py-5 items-center">
                        <figure className="px-10 pt-10">
                            <img src={liveTracking} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="border-l-2 border-dashed border-secondary h-50 mx-5"></div>
                        <div className="card-body justify-center">
                            <h2 className="card-title">24/7 Call Center Support</h2>
                            <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="border-t border-dashed border-secondary  mx-auto mt-20"></div>
        </div>
    );
};

export default Choose;