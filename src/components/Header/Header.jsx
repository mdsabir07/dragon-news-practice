import React from 'react';
import Logo from '../../assets/logo.png';
import { format } from 'date-fns';
import LatestNews from '../LatestNews';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <header className=''>
            <div className='flex justify-center gap-2 flex-col items-center'>
                <img src={Logo} className='w-[480px]' alt="" />
                <p className='text-lg text-accent'>Journalism Without Fear or Favour</p>
                <p className='text-xl font-medium text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            </div>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews />
            </section>
            <nav className='nav flex justify-between items-center w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
        </header>
    );
};

export default Header;