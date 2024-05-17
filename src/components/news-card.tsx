import Link from 'next/link';

const NewsCard = () => {
	return (
		<Link
			href='#'
			className='cursor-pointer hover:text-secondary text-white transition-all delay-75'
		>
			<h3 className='text-lg  font-semibold'>Hydrogen VS Electric Cars</h3>
			<p className='text-slate-300'>
				Will hydrogen-fueled cars ever catch up to EVs?
			</p>
		</Link>
	);
};

export default NewsCard;
