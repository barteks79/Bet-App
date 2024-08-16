/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function AsideLeague({ image, children }) {
	return (
		<li>
			<img src={image} />
			<NavLink>{children}</NavLink>
		</li>
	);
}
