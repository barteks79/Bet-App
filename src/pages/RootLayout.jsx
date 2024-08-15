import AsideNavbar from '../components/navigation/aside/AsideNavbar';
import TopNavbar from '../components/navigation/top/TopNavbar';

export default function RootLayout() {
	return (
		<>
			<AsideNavbar />
			<main>
				<TopNavbar />
				<section></section>
			</main>
		</>
	);
}
