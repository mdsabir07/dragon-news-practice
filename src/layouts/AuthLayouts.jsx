import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='nav flex justify-between items-center w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <main className='w-8/12 py-8 mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayouts;