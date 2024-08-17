import NavItem from './NavItem';

function TopNavbar() {
	return (
		<nav className="flex w-full h-28 bg-primary shadow-navbar">
			<div className="flex justify-between items-center w-wrapper px-20">
				<ul className="flex items-center gap-8 font-inter text-2xl h-3/4">
					<NavItem>Live</NavItem>
					<NavItem>Favorite</NavItem>
					<NavItem>My Bets</NavItem>
				</ul>
				<ul className="flex items-center gap-8 font-inter text-2xl h-4/6 border-r border-grey-light px-16">
					<NavItem>Search</NavItem>
					<NavItem>Deposit</NavItem>
					<NavItem>$2568.19</NavItem>
				</ul>
			</div>
			{/* <div className="flex justify-center items-center w-[22%]">
				<ul className="flex justify-between w-full items-center text-grey-light text-2xl">
					<NavItem>Login</NavItem>
					<NavItem>Sign Up</NavItem>
					<NavItem>Dashboard</NavItem>
				</ul>
			</div> */}
		</nav>
	);
}

export default TopNavbar;
