/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function AsideCategory({ href, icon, children }) {
	return (
		<li>
			<NavLink to={href}>
				{icon}
				{children}
			</NavLink>
		</li>
	);
}
