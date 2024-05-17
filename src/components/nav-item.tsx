import Link from 'next/link';

const NavItem = ({ href, text }: { href: string; text: string }) => {
	return (
		<li>
			<Link
				href={href}
				className='text-slate-600 hover:text-secondary transition-all delay-75'
			>
				{text}
			</Link>
		</li>
	);
};

export default NavItem;
