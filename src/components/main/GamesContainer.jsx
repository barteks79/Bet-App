function GamesContainer({ icon, children }) {
	return (
		<div>
			<section>
				{icon}
				{children}
			</section>
			<section></section>
		</div>
	);
}

export default GamesContainer;
