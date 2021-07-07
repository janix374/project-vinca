import React from 'react';
import Groups from './Groups';

const GroupBiologyAndPhysics = () => {
	const teamName =
		'Group_for_investigation_of_complex_systems_in_biology_and_physics';
	const title =
		'Group for investigation of complex phenomena in biological and physical systems (ICP)';
	const description =
		'We focus on the phenomena and processes driven by light and driving light propagation through different optical and biological media. Both aspects of light, classical and quantum, are investigated regarding the light-matter interaction peculiarities.   Governed by an increasing interest in breaking standard measurement limits, in reaching ultrafast and efficient transfer and coding of information, multi-tasking quantum computers, highly efficient sensors and strong and precise lasers, we attempt to model light propagation through artificial photonic structures: photonic lattices (one-, two- and three dimensional), wave-guide arrays,  networks of ring and helical resonators. This will help to overcome limitations of materials available in nature and construction of easy manageable photonic platforms for investigation of new physical phenomena which can stimulate new breakthroughs in quantum technologies. Two main areas of research will be nonlinear and topological photonics and quantum nanooptics. ';
	const picture = `${process.env.PUBLIC_URL}/assets/images/galleries/image8.jpg`;
	return (
		<Groups
			teamName={teamName}
			title={title}
			description={description}
			picture={picture}
		/>
	);
};

export default GroupBiologyAndPhysics;
