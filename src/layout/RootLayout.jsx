import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const RootLayout = () => {
    return (
        <div className='bg-[#EAECED]'>
            <div className='max-w-7xl mx-auto py-5'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;