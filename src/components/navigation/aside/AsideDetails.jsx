/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function AsideDetails({ image, data, type }) {
	return (
		<li>
			<img src={image} />
			<NavLink>{data}</NavLink>
		</li>
	);
}
