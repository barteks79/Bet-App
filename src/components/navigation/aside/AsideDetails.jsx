/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Animations.module.css';

function AsideDetails({ isOpen }) {
	const category = useSelector(state => state.ui.openDropdown);

	return (
		// add dynamic max-height depending on data length
		<ul className={`flex flex-col gap-5 w-full bg-primary text-xl ${isOpen && 'py-5 max-h-20'} ${styles.dropdown}`}>
			<li className="flex w-aside-wrapper justify-center items-center gap-5">
				<img src="https://media.api-sports.io/football/leagues/88.png" className="w-10" />
				<NavLink>{category}</NavLink>
			</li>
		</ul>
	);
}

export default AsideDetails;
