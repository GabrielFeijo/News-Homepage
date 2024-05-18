import Image from 'next/image';
import logo from '../../public/assets/images/logo.svg';
import NavItem from './nav-item';
import { ArrowLeft, Newspaper } from 'lucide-react';
import Link from 'next/link';

const Header = ({ showNav = true }: { showNav?: boolean }) => {
	return (
		<header className='flex justify-between items-center'>
			<Link href='/'>
				<Image
					src={logo}
					alt='Logo da aplicação'
				/>
			</Link>

			{showNav ? (
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
			) : (
				<Newspaper className='size-6' />
			)}
		</header>
	);
};

export default Header;
