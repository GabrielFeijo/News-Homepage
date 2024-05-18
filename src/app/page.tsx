import Header from '@/components/header';
import MainHeadline from '@/components/main-headline';
import News from '@/components/news';
import TechNewsCard from '@/components/tech-news-card';
import { db } from '@/lib/prisma';
import { Category } from '@prisma/client';

export default async function Home() {
	const techNews = await db.post.findMany({
		where: { category: Category.PC },
	});

	return (
		<main className='p-4 md:py-10 md:px-20 space-y-10'>
			<Header />

			<section className='block lg:grid grid-cols-6 gap-6 space-y-8 lg:space-y-0 '>
				<MainHeadline />
				<News />
			</section>

			<section className='flex flex-wrap w-full gap-6 justify-between '>
				{techNews.map((news, idx) => (
					<TechNewsCard
						key={news.id}
						idx={idx + 1}
						techNews={news}
					/>
				))}
			</section>
		</main>
	);
}
