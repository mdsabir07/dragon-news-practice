import React, { use } from 'react';
import { NavLink } from 'react-router';

const catsPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
    // console.log(catsPromise);
    const categories = use(catsPromise);
    return (
        <div>
            <h2>All Categories: {categories.length}</h2>

            <div className='grid gap-3'>
                {categories.map(category => <NavLink
                    key={category.id}
                    to={`/category/${category.id}`}
                    className={({ isActive }) => isActive ? 'bg-base-200 p-3' : 'hover:bg-base-200 p-3'}
                >{category.name}</NavLink>)}
            </div>
        </div>
    );
};

export default Categories;