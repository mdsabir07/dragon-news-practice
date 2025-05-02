import React from 'react';
import { NavLink } from 'react-router';
import User from '../assets/user.png'

const Navbar = () => {
    return (
        <>
            <div className=""></div>
            <div className="navigation flex items-center justify-center gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-2">
                <img src={User} alt="" />
                <button className='bg-primary text-base-100 font-medium py-2 px-6'>Login</button>
            </div>
        </>
    );
};

export default Navbar;