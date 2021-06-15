import React from 'react';
import Groups from './Groups';

const GroupBiologyAndPhysics = () => {
	const teamName =
		'Group_for_investigation_of_complex_systems_in_biology_and_physics';
	const title =
		'Group for investigation of complex systems in biology and physics';
	const description = 'description';

	return <Groups teamName={teamName} title={title} description={description} />;
};

export default GroupBiologyAndPhysics;
