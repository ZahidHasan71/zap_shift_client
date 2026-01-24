import React from 'react';
import merchantBg from '../../assets/be-a-merchant-bg.png'
import locationMerchant from '../../assets/location-merchant.png'
const HomeAction = () => {
    return (
        <div className='my-20 mx-20'>
            <div className='my-18'>
                <div className="mt-5">
                    <div className="card w-full shadow-xl my-5 flex flex-row p-20 items-center bg-secondary bg-no-repeat"
                        style={{ backgroundImage: `url(${merchantBg})` }}

                    >
                        {/* <img src={merchantBg} alt="" className='-mt-5' /> */}
                        <div>
                            <h1 className='text-4xl font-semibold text-white  '>Merchant and Customer Satisfaction is Our First Priority</h1>
                            <p className='text-white max-w-lg mt-5'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                        </div>
                        <div>
                            <img src={locationMerchant} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HomeAction;