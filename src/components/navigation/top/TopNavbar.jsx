import NavLink from './NavItem';

function TopNavbar() {
	return (
		<nav>
			<ul>
				<NavLink>Live</NavLink>
				<NavLink>Favorite</NavLink>
				<NavLink>My Bets</NavLink>
			</ul>
			<ul>
				<NavLink>Search</NavLink>
				<NavLink>Deposit</NavLink>
				<NavLink>$2568.19</NavLink>
			</ul>
		</nav>
	);
}

export default TopNavbar;
