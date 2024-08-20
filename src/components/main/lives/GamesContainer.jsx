import { useQuery } from '@tanstack/react-query';
import { fetchLiveFixtures } from '../../../util/http';

import GameCard from './GameCard';
import ContainerLabels from './ContainerLabels';

function GamesContainer() {
	// const bestLeaguesIds = [1, 2, 39, 140, 135, 61, 78, 88, 94, 203];

	const { data } = useQuery({
		queryKey: ['live', 'fixtures'],
		queryFn: () => fetchLiveFixtures({ limit: 4 }),
		stealTime: 30000,
		refetchInterval: 30000,
	});

	console.log('GamesContainer: ', data);

	return (
		<div className="flex flex-col w-main-wrapper items-center bg-primary shadow-aside rounded-xl">
			<ContainerLabels label="Live Matches" href="/live" />
			<section className="flex flex-wrap justify-center w-live-wrapper gap-10 pb-10">
				{data &&
					data.map(fixture => {
						return <GameCard key={fixture.fixture.id} fixture={fixture} />;
					})}
			</section>
		</div>
	);
}

export default GamesContainer;
