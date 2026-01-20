import React from 'react';
import Marquee from "react-fast-marquee";
import brandImg1 from '../../assets/brands/amazon.png'
import brandImg2 from '../../assets/brands/amazon_vector.png'
import brandImg3 from '../../assets/brands/casio.png'
import brandImg4 from '../../assets/brands/moonstar.png'
import brandImg5 from '../../assets/brands/randstad.png'
import brandImg6 from '../../assets/brands/star.png'
import brandImg7 from '../../assets/brands/start_people.png'

const Brands = () => {
    const brandLogo = [brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6, brandImg7]
    return (
        <div className='my-18'>
            <div className="text-center">
                <h2 className='text-3xl font-bold text-secondary my-10 '>We've helped thousands of sales teams</h2>
            </div>
            <Marquee behavior="scroll" direction="left" scrollamount="5">
                <div className="flex items-center gap-10">
                    {
                        brandLogo.map(logo => <img src={logo} alt="" className="w-auto" />)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Brands;