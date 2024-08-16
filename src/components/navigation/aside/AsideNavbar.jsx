import AsideCategory from './AsideCategory';
import AsideLeague from './AsideLeague';

export default function AsideNavbar() {
	return (
		<aside>
			<section>
				<ul>
					<AsideCategory />
				</ul>
			</section>

			<section>
				<ul>
					<AsideLeague image="https://media.api-sports.io/football/leagues/39.png">Premier League</AsideLeague>
					<AsideLeague image="https://media.api-sports.io/football/leagues/61.png">Ligue 1</AsideLeague>
				</ul>
			</section>
		</aside>
	);
}
