import LiveCard from '../live/LiveCard';
import UpcomingCard from './UpcomingCard';
import ContainerLabels from './ContainerLabels';

function HomeContainer({ data, label, href }) {
	return (
		<div className="flex flex-col w-main-wrapper items-center bg-primary shadow-aside rounded-xl">
			<ContainerLabels label={label} href={href} />
			<section className="flex flex-wrap w-live-wrapper gap-10 pb-10">
				{data &&
					data.map(fixture => {
						const fixtureId = fixture.fixture.id;
						if (href === '/live') {
							return <LiveCard key={fixtureId} fixture={fixture} />;
						} else if (href === '/upcoming') {
							return <UpcomingCard key={fixtureId} fixture={fixture} fixtureId={fixtureId} />;
						}
					})}
			</section>
		</div>
	);
}

export default HomeContainer;
