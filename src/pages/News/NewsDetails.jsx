import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import RightAside from '../Home/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    // console.log(data, id);
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);
    }, [data, id]);
    return (
        <div className='w-11/12 mx-auto py-5'>
            <Header></Header>

            <main className='grid grid-cols-12 py-10 gap-8'>
                <section className='col-span-9'>
                    <h2 className='font-bold text-3xl mb-5'>Dragon news</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <RightAside></RightAside>
            </main>
        </div>
    );
};

export default NewsDetails;