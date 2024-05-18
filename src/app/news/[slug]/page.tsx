/* eslint-disable @next/next/no-img-element */
import Comments from '@/app/news/_components/comments';
import Header from '@/components/header';
import Separator from '@/components/separator';
import { db } from '@/lib/prisma';
import { formatToBrazilianDate } from '@/utils/format-date';

const NewsPage = async ({ params }: { params: { slug: string } }) => {
	const news = await db.post.findUnique({
		where: { slug: params.slug },
		include: {
			author: true,
		},
	});

	return (
		<main className='p-4 md:py-10 md:px-20 space-y-10'>
			<Header showNav={false} />
			<img
				src={news?.imageURL}
				alt={news?.title}
				className='h-96 w-full object-cover'
			/>

			<section className='space-y-2'>
				<h1 className='text-4xl font-extrabold text-slate-800'>
					{news?.title}
				</h1>

				<p>{news?.description}</p>

				<p>{news?.body}</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					quibusdam quidem sapiente consequatur. Iusto facere soluta alias ad
					cupiditate fugit quos placeat distinctio aspernatur? Labore voluptas
					amet non cum placeat! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Eos quidem ducimus veniam vel maiores, cum illum
					blanditiis voluptates veritatis. Tempora repudiandae nisi omnis.
					Aspernatur voluptatem id itaque voluptatibus, optio rerum.
				</p>

				<div className='font-medium'>
					<p>Author: {news?.author.name}</p>
					<p>
						Creation Date:{' '}
						{formatToBrazilianDate(news!.createdAt.toISOString())}
					</p>
				</div>
			</section>

			<Separator />

			<Comments postId={news!.id} />
		</main>
	);
};

export default NewsPage;
