import GameCard from './GameCard';
import ContainerLabels from './ContainerLabels';

function GamesContainer() {
	return (
		<div className="flex flex-col w-main-wrapper items-center bg-primary shadow-aside rounded-xl">
			<ContainerLabels label="Live Matches" href="/live" />
			<section className="flex flex-wrap justify-center w-live-wrapper gap-10 pb-10">
				<GameCard />
				<GameCard />
				<GameCard />
				<GameCard />
			</section>
		</div>
	);
}

export default GamesContainer;
