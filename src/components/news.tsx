import React from 'react';
import NewsCard from './news-card';

const News = () => {
	return (
		<section className='bg-secondary col-span-2 p-6'>
			<h2 className='text-secondary text-3xl font-semibold'>News</h2>

			<div className='mt-4 h-[calc(100%-3rem)] flex justify-between flex-col'>
				<NewsCard />
				<div className='border-b border-slate-500 my-2'></div>
				<NewsCard />
				<div className='border-b border-slate-500 my-2'></div>
				<NewsCard />
			</div>
		</section>
	);
};

export default News;
