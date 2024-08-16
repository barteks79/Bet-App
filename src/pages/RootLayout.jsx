import { Outlet } from 'react-router-dom';

import AsideNavbar from '../components/navigation/aside/AsideNavbar';
import TopNavbar from '../components/navigation/top/TopNavbar';

function RootLayout() {
	return (
		<>
			<AsideNavbar />
			<main>
				<TopNavbar />
				<section>
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default RootLayout;
