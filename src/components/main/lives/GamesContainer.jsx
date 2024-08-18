import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import GameCard from './GameCard';

function GamesContainer() {
	return (
		<div className="flex flex-col w-main-wrapper items-center bg-primary shadow-aside rounded-xl">
			<section className="flex justify-between text-white w-full font-inter font-semibold text-xl">
				<div className="flex items-center gap-5 py-8 px-10">
					<FontAwesomeIcon icon={faSatelliteDish} />
					<p>Live Matches</p>
				</div>
				<Link className="flex items-center gap-4 py-8 px-10" to="/live">
					<p>More Games</p>
					<FontAwesomeIcon icon={faRightToBracket} />
				</Link>
			</section>
			<section className="flex flex-wrap justify-center w-live-wrapper gap-10 pb-10">
				<GameCard />
				<GameCard />
				<GameCard />
				<GameCard />
			</section>
		</div>
	);
}

export default GamesContainer;
