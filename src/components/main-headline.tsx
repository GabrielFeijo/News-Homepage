/* eslint-disable @next/next/no-img-element */
import { db } from '@/lib/prisma';
import Link from 'next/link';

const MainHeadline = async () => {
	const mainNews = await db.post.findFirst({
		orderBy: {
			comments: {
				_count: 'desc',
			},
		},
	});

	return (
		<section className='col-span-4 space-y-4'>
			<img
				src={mainNews?.imageURL}
				alt={mainNews?.title}
			/>
			<div className='flex lg:flex-row flex-col justify-between lg:gap-20 gap-4'>
				<h1 className='text-4xl lg:text-6xl font-extrabold text-slate-800'>
					{mainNews?.title}
				</h1>

				<section className='flex flex-col justify-between items-start gap-4 lg:max-w-96 w-full '>
					<p className='text-[.9rem]'>{mainNews?.description}</p>

					<Link
						href={`/news/${mainNews?.slug}`}
						className='bg-primary-btn text-white px-4 py-3 uppercase tracking-widest font-medium text-sm hover:bg-secondary transition-all delay-100'
					>
						Read more
					</Link>
				</section>
			</div>
		</section>
	);
};

export default MainHeadline;
