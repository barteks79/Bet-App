import AsideCategory from './AsideCategory';
import AsideLeague from './AsideLeague';

export default function AsideNavbar() {
	return (
		<aside className="flex flex-col items-center h-svh w-aside bg-primary-light">
			<section className="w-aside-wrapper">
				<ul>
					<AsideCategory>Leagues</AsideCategory>
				</ul>
			</section>

			<section className="w-aside-wrapper">
				<ul>
					<AsideLeague image="https://media.api-sports.io/football/leagues/39.png">Premier League</AsideLeague>
					<AsideLeague image="https://media.api-sports.io/football/leagues/61.png">Ligue 1</AsideLeague>
				</ul>
			</section>
		</aside>
	);
}
