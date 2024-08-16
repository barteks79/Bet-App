import AsideCategory from './AsideCategory';
import AsideLeague from './AsideLeague';

export default function AsideNavbar() {
	return (
		<aside className="flex flex-col h-svh w-aside bg-primary-light text-white">
			<h1 className="text-center py-8">Logo</h1>

			<section className="self-center w-aside-wrapper py-5 ">
				<ul className="flex flex-col gap-5">
					<AsideCategory>Leagues</AsideCategory>
					<AsideCategory>Countries</AsideCategory>
				</ul>
			</section>

			<section className="flex justify-center h-svh w-full bg-primary">
				<ul className="flex flex-col gap-5 w-aside-wrapper py-5">
					<AsideLeague>Premier League</AsideLeague>
					<AsideLeague>Ligue 1</AsideLeague>
				</ul>
			</section>
		</aside>
	);
}
