import Image from 'next/image';

import { Post } from '@prisma/client';

const TechNewsCard = ({ idx, techNews }: { idx: number; techNews: Post }) => {
	return (
		<section className='flex gap-4 w-[30rem]'>
			<div className='relative w-[200px] h-[254px]'>
				<Image
					className='w-auto'
					src={techNews.imageURL}
					fill
					alt={''}
				/>
			</div>

			<div className='flex flex-1 flex-col justify-evenly '>
				<span className='font-semibold text-3xl text-gray-400'>
					{idx < 10 ? `0${idx}` : `${idx}`}
				</span>
				<h4 className='text-xl font-extrabold text-slate-900 '>
					{techNews.title}
				</h4>
				<p className='text-slate-500'>{techNews.description}</p>
			</div>
		</section>
	);
};

export default TechNewsCard;
