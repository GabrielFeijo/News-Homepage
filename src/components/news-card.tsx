import { Post } from '@prisma/client';
import Link from 'next/link';

const NewsCard = ({ news }: { news: Post }) => {
	return (
		<Link
			href='#'
			className='cursor-pointer hover:text-secondary text-white transition-all delay-75'
		>
			<h3 className='text-lg  font-semibold'>{news.title}</h3>
			<p className='text-slate-300'>{news.description}</p>
		</Link>
	);
};

export default NewsCard;
