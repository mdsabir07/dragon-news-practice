import React, { Suspense } from 'react';
import Categories from '../../components/Categories';
import Loading from '../Auth/Loading/Loading';

const LeftAside = () => {
    return (
        <aside className='col-span-3 sticky top-0 h-fit'>
            {import.meta.env.VITE_name}
            <Suspense fallback={<Loading></Loading>}>
                <Categories></Categories>
            </Suspense>
        </aside>
    );
};

export default LeftAside;