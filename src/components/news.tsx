import React from 'react';
import NewsCard from './news-card';
import { db } from '@/lib/prisma';
import Separator from './separator';

const News = async () => {
	const allNews = await db.post.findMany({
		orderBy: { createdAt: 'desc' },
	});

	return (
		<section className='bg-secondary col-span-2 p-6 pr-0'>
			<h2 className='text-secondary text-3xl font-semibold'>New</h2>

			<div className='mt-4 h-[25rem] flex justify-between flex-col overflow-x-auto pr-2 scroll'>
				{allNews.map((news, index) => (
					<div key={news.id}>
						<NewsCard news={news} />
						{index !== allNews.length - 1 && <Separator />}
					</div>
				))}
			</div>
		</section>
	);
};

export default News;
