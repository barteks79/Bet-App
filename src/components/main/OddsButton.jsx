function OddsButton({ bet, odds }) {
	return (
		<button className="flex gap-1 px-5 py-2 bg-secondary text-white font-mulish text-sm rounded-md hover:bg-secondary-light transition-colors duration-150 shadow-navbar">
			<p>{bet}</p>
			<p>{odds}</p>
		</button>
	);
}

export default OddsButton;
