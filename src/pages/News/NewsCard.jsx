import React from 'react';
import { FaBookmark, FaRegEye, FaStar } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const { id, title, rating, total_view, author, thumbnail_url, image_url, details } = news;
    return (
        <div className='border border-base-200'>
            <div className='bg-base-200 p-3 flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img src={author.img} className='w-10 h-10 rounded-full' alt="" />
                    <div>
                        <h5 className='font-bold'>{author.name}</h5>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaBookmark />
                    <IoShareSocialOutline />
                </div>
            </div>
            <div className='p-3'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <img src={thumbnail_url} className='rounded-xl mt-5' alt="" />
                <p>{
                    details.length > 200 ? <>
                        {details.slice(0, 200)}...
                        <Link to={`/news-details/${id}`} className='cursor-pointer font-medium text-primary hover:underline'>Read more</Link>
                    </>
                        :
                        details
                }</p>

                <div className='flex justify-between items-center pt-5 mt-5 border-t border-base-200'>
                    <div className='flex gap-2 items-center'>
                        <div className="flex gap-2 text-orange-400">
                            {Array.from({ length: rating.number }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <span>{rating.number}</span>
                    </div>
                    <span className='flex items-center gap-2'>
                        <FaRegEye />
                        <span> {total_view}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;