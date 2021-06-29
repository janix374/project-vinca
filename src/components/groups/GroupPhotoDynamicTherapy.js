import React from 'react';
import Groups from './Groups';

const GroupPhotoDynamicTherapy = () => {
	const teamName = 'Group_for_photodynamic_therapy_development';
	const title =
		'Group for development of systems for photodynamical therapy (FDT)';
	const description =
		'The cancer therapy based on light has been of huge interest in bio - medically oriented sciences due to increased efficiencies of phototherapeutic approaches, as well as control of detrimental effects from environment on human health.  Regarding this, the activation of drugs by light of proper characteristics is the most promising procedure for efficient therapy of many diseases in medicine and pharmacy. We focus on development of nanocomposites whose activity is sensitively dependent on the light wavelength and intensity. We are targeting the efficient and sensitive cancer therapies (melanoma, cervical cancer, ovarian cancer and colon cancer), advantageous analytical techniques for detection of biological small mass molecules,   investigation of role of aneorobic microorganisms in recovery of intestinal microflora after antibiotic treatment and application in laser dermatology. Our activity intrinsically involves teams of experts in photonics, biology, chemistry, medicine and signal analysis.';

	return <Groups teamName={teamName} title={title} description={description} />;
};

export default GroupPhotoDynamicTherapy;
