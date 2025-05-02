import React from 'react';
import Header from '../components/Header/Header';
// import { Outlet } from 'react-router';
import Home from '../pages/Home/Home';

const Root = () => {
    return (
        <>
            <Header></Header>
            <Home></Home>
        </>
    );
};

export default Root;