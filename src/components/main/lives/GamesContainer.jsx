import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import GameCard from './GameCard';

function GamesContainer() {
	return (
		<div>
			<section>
				<div>
					<FontAwesomeIcon icon={faSatelliteDish} />
					<p>Live Matches</p>
				</div>
				<Link to="">
					<p>More Games</p>
					<FontAwesomeIcon icon={faRightToBracket} />
				</Link>
			</section>
			<section>
				<GameCard />
			</section>
		</div>
	);
}

export default GamesContainer;
