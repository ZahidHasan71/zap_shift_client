import React from 'react';
import serviceIcon from '../../assets/service.png'

const Service = () => {
    return (
        <div className='bg-secondary px-10 py-20 my-30 rounded-2xl'>
            <div className='max-w-2xl mx-auto text-center'>
                <h1 className='text-white text-4xl font-bold'>Our Service</h1>
                <p className='text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card w-90 bg-base-100 shadow-xl text-secondary mt-20 hover:bg-primary transition-colors duration-300">
                    <div className="card-body text-center items-center py-10 px-8">
                        <div className='bg-linear-to-b from-gray-200 to-gray-200/10 p-5 rounded-full'>
                            <img src={serviceIcon} alt="" />
                        </div>
                        <h2 className="card-title text-2xl">Express  & Standard Delivery</h2>
                        <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                </div>
                <div className="card w-90 bg-base-100 shadow-xl text-secondary mt-20 hover:bg-primary transition-colors duration-300">
                    <div className="card-body text-center items-center py-10 px-8">
                        <div className='bg-linear-to-b from-gray-200 to-gray-200/10 p-5 rounded-full'>
                            <img src={serviceIcon} alt="" />
                        </div>
                        <h2 className="card-title text-2xl">Nationwide Delivery</h2>
                        <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                    </div>
                </div>
                <div className="card w-90 bg-base-100 shadow-xl text-secondary mt-20 hover:bg-primary transition-colors duration-300">
                    <div className="card-body text-center items-center py-10 px-8">
                        <div className='bg-linear-to-b from-gray-200 to-gray-200/10 p-5 rounded-full'>
                            <img src={serviceIcon} alt="" />
                        </div>
                        <h2 className="card-title text-2xl">Fulfillment Solution</h2>
                        <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                </div>
                <div className="card w-90 bg-base-100 shadow-xl text-secondary mt-20 hover:bg-primary transition-colors duration-300">
                    <div className="card-body text-center items-center py-10 px-8">
                        <div className='bg-linear-to-b from-gray-200 to-gray-200/10 p-5 rounded-full'>
                            <img src={serviceIcon} alt="" />
                        </div>
                        <h2 className="card-title text-2xl">Cash on Home Delivery</h2>
                        <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>
                </div>
                <div className="card w-90 bg-base-100 shadow-xl text-secondary mt-20 hover:bg-primary transition-colors duration-300">
                    <div className="card-body text-center items-center py-10 px-8">
                        <div className='bg-linear-to-b from-gray-200 to-gray-200/10 p-5 rounded-full'>
                            <img src={serviceIcon} alt="" />
                        </div>
                        <h2 className="card-title text-2xl">Corporate Service / Contract In Logistics</h2>
                        <p>Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                </div>
                <div className="card w-90 bg-base-100 shadow-xl text-secondary mt-20 hover:bg-primary transition-colors duration-300">
                    <div className="card-body text-center items-center py-10 px-8">
                        <div className='bg-linear-to-b from-gray-200 to-gray-200/10 p-5 rounded-full'>
                            <img src={serviceIcon} alt="" />
                        </div>
                        <h2 className="card-title text-2xl">Parcel Return</h2>
                        <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;