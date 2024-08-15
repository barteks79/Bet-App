/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

export default function NavItem({ href, children }) {
	return (
		<li>
			<NavLink to={href} className={({ isActive }) => (isActive ? styles.active : '')}>
				{children}
			</NavLink>
		</li>
	);
}
