import React from 'react';
import Groups from './Groups';

const GroupOptoBiomedical = () => {
	const teamName = 'Group_for_opto_biomedical_engineering';
	const title = 'Group for optobiomedical engineering (OBE)';
	const description =
		'Our primary interest is development of multi-sensor system (polycardiograph) for non-invasive recording of mechanical, acoustic and electrical parameters of cardio vascular signals and the signal analysis to provide early diagnostics of cardiovascular diseases.  The main hypothesis is that any heart dysfunction is followed by simultaneous changes in the electric heart activity, biomechanics of cardiovascular system, in blood pressure in arteries and heart ventricle, blood propagation, synchronization of opening and closing of heart valves etc.  We assume that these changes will reflect on the signals detected and measured by multisensory in real time. We will adapt available and propose new, highly sensitive and efficient, algorithms and methods based on machine and deep learning for signal analysis and early diagnostics of potential heart failure. The close collaboration with clinicians and engineers is inevitable in order to reach the final aim - to provide a new, efficient diagnostic apparatus to clinics.';
	const picture = `${process.env.PUBLIC_URL}/assets/images/galleries/image1.jpg`;
	return (
		<Groups
			teamName={teamName}
			title={title}
			description={description}
			picture={picture}
		/>
	);
};

export default GroupOptoBiomedical;
