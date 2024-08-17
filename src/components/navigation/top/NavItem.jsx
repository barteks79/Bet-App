import { NavLink } from 'react-router-dom';

function NavItem({ href, children }) {
	return (
		<li>
			<NavLink
				to={href}
				className={`text-grey-light hover:text-white transition-colors duration-150 ${({ isActive }) =>
					isActive && 'text-white'}`}>
				{children}
			</NavLink>
		</li>
	);
}

export default NavItem;
