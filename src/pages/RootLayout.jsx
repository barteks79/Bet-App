import { Outlet } from 'react-router-dom';

import AsideNavbar from '../components/navigation/aside/AsideNavbar';
import TopNavbar from '../components/navigation/top/TopNavbar';

function RootLayout() {
	return (
		<>
			<AsideNavbar />
			<main className="w-main">
				<TopNavbar />
				<section className="flex flex-col items-center py-20 gap-20">
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default RootLayout;
