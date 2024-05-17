import Image from 'next/image';

import retroPc from '../../public/assets/images/retro-pcs.jpg';

const TechNewsCard = () => {
	return (
		<section className='flex gap-4 max-w-96'>
			<Image
				className='h-36 w-auto'
				src={retroPc}
				alt={''}
			/>

			<div className='flex flex-1 flex-col justify-evenly max-w-48'>
				<span className='font-semibold text-3xl text-gray-400'>01</span>
				<h4 className='text-xl font-extrabold text-slate-900 '>
					Reviving Retro PCs
				</h4>
				<p className='text-slate-500'>
					What happens when old PCs are given modern upgrades?
				</p>
			</div>
		</section>
	);
};

export default TechNewsCard;
