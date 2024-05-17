import Image from 'next/image';
import web3 from '../../public/assets/images/web-3-desktop.jpg';

const MainHeadline = () => {
	return (
		<div className='col-span-4 space-y-4'>
			<Image
				src={web3}
				alt='The Bright Future of Web 3.0'
			/>

			<div className='flex lg:flex-row flex-col justify-between lg:gap-20 gap-4'>
				<h1 className='text-4xl lg:text-6xl font-extrabold text-slate-800'>
					The Bright Future of Web 3.0?
				</h1>

				<section className='flex flex-col justify-between items-start gap-4 lg:max-w-96 w-full'>
					<p>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>

					<button className='bg-primary-btn text-white px-4 py-3 uppercase tracking-widest font-medium'>
						Read more
					</button>
				</section>
			</div>
		</div>
	);
};

export default MainHeadline;
