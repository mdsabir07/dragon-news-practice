import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 p-2 px-3'>Latest</p>
            <Marquee speed={100} pauseOnHover={true} className='flex gap-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quas pariatur nihil eos. Officia?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quas pariatur nihil eos. Officia?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quas pariatur nihil eos. Officia?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;