import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    const { category_id, title, image_url, details } = news;
    return (
        <div>
            <img src={image_url} alt="" />
            <h1 className='font-bold text-3xl my-5'>{title}</h1>
            <p className='mb-8'>{details}</p>

            <Link to={`/category/${category_id}`} className='bg-secondary text-base-100 py-3 px-8'>Back to categories</Link>
        </div>
    );
};

export default NewsDetailsCard;