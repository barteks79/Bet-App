import { faMagnifyingGlass, faWallet /*faRightFromBracket*/ } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import CircleItem from './CircleItem';

function TopNavbar() {
	return (
		<nav className="flex w-full fixed z-0 h-28 bg-primary shadow-navbar">
			<div className="flex justify-between items-center w-wrapper px-20">
				<ul className="flex items-center gap-8 font-inter text-2xl h-3/4">
					<NavItem>Live</NavItem>
					<NavItem>Favorite</NavItem>
					<NavItem>My Bets</NavItem>
				</ul>
				<ul className="flex items-center gap-8 font-inter text-2xl h-4/6 border-r border-grey-light px-16">
					<CircleItem primary icon={faMagnifyingGlass} />
					<CircleItem icon={faWallet}>Deposit</CircleItem>
					<NavItem>$2568.19</NavItem>
				</ul>
			</div>
			{/* <div className="flex justify-center items-center w-[15%]">
				<ul className="flex justify-between w-full items-center text-grey-light text-2xl">
					<NavItem>Dashboard</NavItem>
					<NavItem>Login</NavItem>
					<CircleItem icon={faRightFromBracket}>Sign Out</CircleItem>
				</ul>
			</div> */}
		</nav>
	);
}

export default TopNavbar;
