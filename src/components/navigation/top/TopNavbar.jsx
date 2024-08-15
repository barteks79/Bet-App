import NavLink from './NavItem';

export default function TopNavbar() {
	return (
		<nav>
			<ul>
				<NavLink>Live</NavLink>
				<NavLink>Favorite</NavLink>
				<NavLink>My Bets</NavLink>
			</ul>
			<ul>
				<NavLink>Deposit</NavLink>
				<NavLink>$2568.19</NavLink>
			</ul>
		</nav>
	);
}
