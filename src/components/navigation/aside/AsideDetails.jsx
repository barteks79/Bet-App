/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function AsideDetails({ type }) {
	return (
		<ul className="w-full bg-primary py-5 text-xl">
			<li className="flex w-aside-wrapper justify-center items-center gap-5">
				<img src="https://media.api-sports.io/football/leagues/88.png" className="w-10" />
				<NavLink>{type}</NavLink>
			</li>
		</ul>
	);
}
