/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function NavItem({ href, children }) {
	return (
		<li>
			<NavLink to={href}>{children}</NavLink>
		</li>
	);
}
