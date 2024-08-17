import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import GameCard from './GameCard';

function GamesContainer() {
	return (
		<div className="flex flex-col w-main-wrapper items-center bg-primary shadow-aside rounded-xl">
			<section className="flex justify-between text-white w-full font-inter text-xl">
				<div className="flex items-center gap-5 py-5 px-8">
					<FontAwesomeIcon icon={faSatelliteDish} />
					<p>Live Matches</p>
				</div>
				<Link className="flex items-center gap-5 p-8" to="/live">
					<p>More Games</p>
					<FontAwesomeIcon icon={faRightToBracket} />
				</Link>
			</section>
			<section className="flex w-live-wrapper gap-5 pb-10">
				<GameCard />
				<GameCard />
				<GameCard />
				<GameCard />
			</section>
		</div>
	);
}

export default GamesContainer;
