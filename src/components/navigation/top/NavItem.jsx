import { NavLink } from 'react-router-dom';

function NavItem({ href, children }) {
	let styles = 'text-grey-light hover:text-white transition-colors duration-150';

	return (
		<li>
			<NavLink to={href} className={({ isActive }) => (isActive ? styles + ' text-white' : styles)} end>
				{children}
			</NavLink>
		</li>
	);
}

export default NavItem;
