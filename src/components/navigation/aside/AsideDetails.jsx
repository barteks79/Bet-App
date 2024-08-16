/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styles from './Animations.module.css';

function AsideDetails({ isOpen, type }) {
	return (
		<ul className={`w-full bg-primary text-xl ${styles.dropdown} ${isOpen && styles.open}`}>
			<li className="flex w-aside-wrapper justify-center items-center gap-5">
				<img src="https://media.api-sports.io/football/leagues/88.png" className="w-10" />
				<NavLink>{type}</NavLink>
			</li>
		</ul>
	);
}

export default AsideDetails;
