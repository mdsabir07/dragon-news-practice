import React from 'react';
import Header from '../components/Header/Header';
// import { Outlet } from 'react-router';
// import Home from '../pages/Home/Home';
import LeftAside from '../pages/Home/LeftAside';
import { Outlet, useNavigate } from 'react-router';
import RightAside from '../pages/Home/RightAside';
import Loading from '../pages/Auth/Loading/Loading';

const Root = () => {
    const {state}=useNavigate();
    return (
        <>
            <Header></Header>
            <div className='grid grid-cols-12 gap-8 w-11/12 mx-auto my-3 '>
                <LeftAside></LeftAside>
                <main className='col-span-6'>
                    {state=="loading"?<Loading></Loading>:<Outlet></Outlet>}
                </main>
                <RightAside></RightAside>
            </div>
        </>
    );
};

export default Root;