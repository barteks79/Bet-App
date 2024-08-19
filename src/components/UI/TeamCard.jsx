function TeamCard({ id, goals }) {
	return (
		<div className="flex justify-between text-white font-inter text-lg">
			<div className="flex items-center gap-3">
				<img className="w-[18px]" src="" alt={`${id} Image`} />
				<p>{id}</p>
			</div>
			<p>{goals}</p>
		</div>
	);
}

export default TeamCard;
