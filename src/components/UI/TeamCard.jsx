import { useQuery } from '@tanstack/react-query';
import { fetchById } from '../../util/http';

function TeamCard({ id, goals }) {
	const { data } = useQuery({
		queryKey: ['teams', id],
		queryFn: () => fetchById({ category: 'teams', id }),
		stealTime: 60000,
	});

	return (
		<div className="flex justify-between text-white font-inter text-lg">
			{data && (
				<div className="flex items-center gap-3">
					<img className="w-[18px]" src={data.team.logo} alt={`${data.team.logo} Logo`} />
					<p>{data.team.name}</p>
				</div>
			)}
			<p>{goals}</p>
		</div>
	);
}

export default TeamCard;
