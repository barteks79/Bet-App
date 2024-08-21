import { useQuery } from '@tanstack/react-query';
import { fetchById } from '../../util/http';

function TeamCard({ id, goals, enabled = true, teamData }) {
	const { data } = useQuery({
		queryKey: ['teams', id],
		queryFn: () => fetchById({ category: 'teams', id }),
		stealTime: 60000,
		gcTime: 60000,
		enabled,
	});

	return (
		<div className="flex justify-between text-white font-inter text-lg">
			{data && (
				<div className="flex items-center gap-3">
					<img className="w-[18px]" src={data.team.logo} alt={`${data.team.name} Logo`} />
					<p>{data.team.name}</p>
				</div>
			)}
			{teamData && (
				<div className="flex items-center gap-3">
					<img className="w-[18px]" src={teamData.logo} alt={`${teamData.name} Logo`} />
					<p>{teamData.name}</p>
				</div>
			)}
			<p className="px-3">{goals}</p>
		</div>
	);
}

export default TeamCard;
