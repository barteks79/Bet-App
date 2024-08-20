import { useDispatch, useSelector } from 'react-redux';
import { betsActions } from '../../store/betsSlice';

function OddsButton({ fixtureId, value, bet, odds }) {
	const bets = useSelector(state => state.bets);
	const dispatch = useDispatch();
	const fixedOdds = odds.toFixed(2);

	const saveBetHandler = () => {
		dispatch(betsActions.saveBet({ fixtureId, value, bet, odds: fixedOdds }));
	};

	const removeBetHandler = () => {
		console.log(fixtureId, value.toString());
		console.log(bets);
		dispatch(betsActions.removeBet({ fixtureId, value }));
	};

	const isSelected = bets.find(bet => bet.fixtureId === fixtureId && bet.value === value);

	return (
		<button
			onClick={isSelected ? removeBetHandler : saveBetHandler}
			className={`flex flex-1 justify-center gap-1 px-5 py-2 bg-secondary text-white font-mulish text-sm rounded-md hover:bg-secondary-light transition-colors duration-150 shadow-navbar ${
				isSelected ? 'bg-secondary-light' : ''
			}`}>
			<p>{value}</p>
			<p>{fixedOdds}</p>
		</button>
	);
}

export default OddsButton;
