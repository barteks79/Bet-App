function TeamCard({ team, image, score }) {
	return (
		<div className="flex justify-between text-white font-inter text-lg">
			<div className="flex items-center gap-3">
				<img className="w-[18px]" src={image} alt={`${team} Image`} />
				<p>{team}</p>
			</div>
			<p>{score}</p>
		</div>
	);
}

export default TeamCard;
