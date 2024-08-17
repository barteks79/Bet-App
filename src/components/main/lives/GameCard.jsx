import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

function GameCard() {
	return (
		<div>
			<section>
				<div>
					<FontAwesomeIcon icon={faFutbol} />
					<span>UEFA Champions League</span>
				</div>
				<p>Live '1</p>
			</section>
			<section></section>
			<section></section>
		</div>
	);
}

export default GameCard;
