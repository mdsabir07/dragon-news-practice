import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import User from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => {
            alert("LogOut successful!");
        })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className="">{user && user.email}</div>
            <div className="navigation flex items-center justify-center gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-2">
                <img src={`${user ? user.photoURL : User}`} className='h-10 w-10 rounded-full' alt="" />
                {
                    user ? <button onClick={handleLogOut} className='cursor-pointer bg-primary text-base-100 font-medium py-2 px-6'>Log out</button> : <Link to='/auth/login' className='bg-primary text-base-100 font-medium py-2 px-6'>Login</Link>
                }
            </div>
        </>
    );
};

export default Navbar;