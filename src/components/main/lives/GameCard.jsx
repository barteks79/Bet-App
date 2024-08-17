import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import OddsButton from '../OddsButton';

function GameCard() {
	return (
		<div className="w-[24.3%] bg-primary-light">
			<section>
				<div>
					<FontAwesomeIcon icon={faFutbol} />
					<span>UEFA Champions League</span>
				</div>
				<p>Live '1</p>
			</section>
			<section>
				<div>
					<img src="" alt="Home Team" />
					<p>Real Madrid</p>
					<p>3</p>
				</div>
			</section>
			<section>
				<OddsButton bet="1X" odds="1.32" />
				<OddsButton bet="12" odds="2.23" />
				<OddsButton bet="2X" odds="4.23" />
			</section>
		</div>
	);
}

export default GameCard;
