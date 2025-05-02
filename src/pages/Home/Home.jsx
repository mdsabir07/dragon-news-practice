import React from 'react';
import LeftAside from './LeftAside';
// import Middle from './Middle';
import RightAside from './RightAside';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='grid grid-cols-12 gap-8 w-11/12 mx-auto my-3 '>
            <LeftAside></LeftAside>
            <main className='col-span-6'>
                <Outlet></Outlet>
            </main>
            <RightAside></RightAside>
        </div>
    );
};

export default Home;