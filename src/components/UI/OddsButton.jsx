function OddsButton({ bet, odds }) {
	const fixedOdds = odds.toFixed(2);

	return (
		<button className="flex flex-1 justify-center gap-1 px-5 py-2 bg-secondary text-white font-mulish text-sm rounded-md hover:bg-secondary-light transition-colors duration-150 shadow-navbar">
			<p>{bet}</p>
			<p>{fixedOdds}</p>
		</button>
	);
}

export default OddsButton;
