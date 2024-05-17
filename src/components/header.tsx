import Image from 'next/image';
import logo from '../../public/assets/images/logo.svg';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex justify-between items-center'>
			<Image
				src={logo}
				alt='Logo da aplicação'
			/>

			<nav>
				<ul className='flex gap-4'>
					<li>
						<Link href='#'>Home</Link>
					</li>
					<li>
						<Link href='#'>New</Link>
					</li>
					<li>
						<Link href='#'>Popular</Link>
					</li>
					<li>
						<Link href='#'>Trending</Link>
					</li>
					<li>
						<Link href='#'>Categories</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
