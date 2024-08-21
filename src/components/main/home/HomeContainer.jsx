import LiveCard from '../live/LiveCard';
import UpcomingCard from './UpcomingCard';
import ContainerLabels from './ContainerLabels';
import MainWrapper from '../../wrappers/MainWrapper';

function HomeContainer({ data, label, href }) {
	return (
		<MainWrapper>
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
		</MainWrapper>
	);
}

export default HomeContainer;
