import React, { Suspense } from 'react';
import Categories from '../../components/Categories';

const LeftAside = () => {
    return (
        <aside className='col-span-3 sticky top-0 h-fit'>
            <Suspense fallback={<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>}>
                <Categories></Categories>
            </Suspense>
        </aside>
    );
};

export default LeftAside;