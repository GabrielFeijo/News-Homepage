import Image from 'next/image';

import { Post } from '@prisma/client';
import Link from 'next/link';

const TechNewsCard = ({ idx, techNews }: { idx: number; techNews: Post }) => {
	return (
		<Link
			href={`/news/${techNews.slug}`}
			className='flex gap-4 w-[30rem] hover:text-secondary transition-all delay-75 text-slate-900'
		>
			<div className='relative w-[200px] h-[254px]'>
				<Image
					className='w-auto object-cover'
					src={techNews.imageURL}
					fill
					alt={''}
				/>
			</div>

			<div className='flex flex-1 flex-col justify-evenly '>
				<span className='font-semibold text-3xl text-gray-400'>
					{idx < 10 ? `0${idx}` : `${idx}`}
				</span>
				<h4 className='text-xl font-extrabold'>{techNews.title}</h4>
				<p className='text-slate-500'>{techNews.description}</p>
			</div>
		</Link>
	);
};

export default TechNewsCard;
