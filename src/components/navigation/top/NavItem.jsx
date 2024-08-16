/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

function NavItem({ href, children }) {
	return (
		<li>
			<NavLink to={href}>{children}</NavLink>
		</li>
	);
}

export default NavItem;
