import React from 'react';
import bookingIcon from '../../assets/bookingIcon.png'

const Work = () => {
    return (
        <div className='mx-10'>
            <h2 className='text-2xl font-bold text-secondary my-10 '>How it Works</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="card w-75 bg-base-100 shadow-xl text-secondary">
                        <div className="card-body">
                            <div><img src={bookingIcon} alt="" /></div>
                            <h2 className="card-title">Booking Pick & Drop</h2>
                            <p>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                    <div className="card w-75 bg-base-100 shadow-xl text-secondary">
                        <div className="card-body">
                            <div><img src={bookingIcon} alt="" /></div>
                            <h2 className="card-title">Booking Pick & Drop</h2>
                            <p>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                    <div className="card w-75 bg-base-100 shadow-xl text-secondary">
                        <div className="card-body">
                            <div><img src={bookingIcon} alt="" /></div>
                            <h2 className="card-title">Booking Pick & Drop</h2>
                            <p>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                    <div className="card w-75 bg-base-100 shadow-xl text-secondary">
                        <div className="card-body">
                            <div><img src={bookingIcon} alt="" /></div>
                            <h2 className="card-title">Booking Pick & Drop</h2>
                            <p>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;