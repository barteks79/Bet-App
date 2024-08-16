import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import AsideCategory from './AsideCategory';

export default function AsideNavbar() {
	const icons = {
		leagues: <FontAwesomeIcon icon={faPersonRunning} />,
		countries: <FontAwesomeIcon icon={faEarthAmericas} />,
	};

	return (
		<aside className="flex flex-col h-svh w-aside bg-primary-light text-white shadow-xl">
			<h1 className="text-center py-8">Logo</h1>
			<section className="py-5">
				<ul className="flex flex-col gap-5">
					<AsideCategory icon={icons.leagues} isOpen={true}>
						Leagues
					</AsideCategory>
					<AsideCategory icon={icons.countries} isOpen={true}>
						Countries
					</AsideCategory>
				</ul>
			</section>
		</aside>
	);
}
