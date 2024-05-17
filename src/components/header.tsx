import Image from 'next/image';
import logo from '../../public/assets/images/logo.svg';
import NavItem from './nav-item';

const Header = () => {
	return (
		<header className='flex justify-between items-center'>
			<Image
				src={logo}
				alt='Logo da aplicação'
			/>

			<nav>
				<ul className='flex gap-4'>
					<NavItem
						href='#'
						text='Home'
					/>
					<NavItem
						href='#'
						text='Popular'
					/>
					<NavItem
						href='#'
						text='Trending'
					/>
					<NavItem
						href='#'
						text='Categories'
					/>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
