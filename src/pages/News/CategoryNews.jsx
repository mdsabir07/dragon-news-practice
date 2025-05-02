import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCatagoryNews] = useState([]);
    useEffect(() => {
        if (id == '0') {
            setCatagoryNews(data);
            return;
        } else if (id == '1') {
            const filteredData = data.filter(news => news.others.is_today_pick == true);
            setCatagoryNews(filteredData);
        } else {
            const filteredData = data.filter(news => news.category_id == id);
            setCatagoryNews(filteredData);
        }
    }, [data, id]);
    return (
        <div>
            <h2 className='font-bold'>Total: <span className='text-secondary'>{categoryNews.length}</span> news found</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;