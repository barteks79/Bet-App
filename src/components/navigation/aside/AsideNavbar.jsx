import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import AsideCategory from './AsideCategory';

function AsideNavbar() {
	const icons = {
		leagues: <FontAwesomeIcon icon={faPersonRunning} />,
		countries: <FontAwesomeIcon icon={faEarthAmericas} />,
	};

	const leagues = [
		{
			league: {
				id: 1,
				name: 'Champions League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
		{
			league: {
				id: 2,
				name: 'Premiere League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
		{
			league: {
				id: 3,
				name: 'Premiere League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
		{
			league: {
				id: 4,
				name: 'Premiere League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
	];

	const countries = [
		{
			code: 'AL',
			flag: 'https://media.api-sports.io/flags/al.svg',
			name: 'Albania',
		},
		{
			code: 'DZ',
			flag: 'https://media.api-sports.io/flags/al.svg',
			name: 'Algeria',
		},
	];

	return (
		<aside className="flex flex-col h-svh w-aside bg-primary-light shadow-aside font-inter z-0">
			<Link to="/">
				<h1 className="text-3xl text-center py-8 text-white font-semibold font-mulish">Logo</h1>
			</Link>
			<section className="py-5 font-medium">
				<ul className="flex flex-col gap-5">
					<AsideCategory data={leagues} icon={icons.leagues}>
						Leagues
					</AsideCategory>
					<AsideCategory data={countries} icon={icons.countries}>
						Countries
					</AsideCategory>
				</ul>
			</section>
		</aside>
	);
}

export default AsideNavbar;
