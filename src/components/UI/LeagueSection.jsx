import { useQuery } from '@tanstack/react-query';
import { fetchById } from '../../util/http';

function LeagueSection({ id, children }) {
	const { data } = useQuery({
		queryKey: ['leagues', id],
		queryFn: () => fetchById({ category: 'leagues', id }),
		staleTime: 30000,
	});

	return (
		<section className="flex justify-between items-center pt-5 px-7 text-white font-mulish text-lg">
			<div className="flex items-center gap-3 pr-3">
				{data && <img src={data.league.logo} className="w-[20px]" />}
				{data && <p className="text-base">{data.league.name}</p>}
			</div>
			<p className="px-4 py-1 bg-secondary rounded-lg text-base">{children}</p>
		</section>
	);
}

export default LeagueSection;
