import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

function ContainerLabels({ label, href, leagueId }) {
	// fetching data by league id

	return (
		<section className="flex items-center justify-between text-white w-full font-inter font-semibold text-xl">
			<div className={`flex items-center gap-5 py-8 px-10`}>
				{leagueId ? (
					<img src={leagueId.logo} alt={`${leagueId.name} Logo`} className="w-[50px]" />
				) : (
					<FontAwesomeIcon icon={faSatelliteDish} />
				)}
				<p>{leagueId ? leagueId.name : label}</p>
			</div>
			{href && (
				<Link className="flex items-center gap-4 py-8 px-10" to={leagueId ? leagueId.slug : href}>
					<p>More Games</p>
					<FontAwesomeIcon icon={faRightToBracket} />
				</Link>
			)}
		</section>
	);
}

export default ContainerLabels;
