import React from 'react';

const PublicationBoldText = ({ text, wordsToBold }) => {
	function makeBold(input, wordsToBoldArgument) {
		return input.replace(
			new RegExp(`(\\b)(${wordsToBoldArgument.join('|')})(\\b)`, 'ig'),
			'$1<b>$2</b>$3'
		);
	}

	return (
		<p dangerouslySetInnerHTML={{ __html: makeBold(text, wordsToBold) }} />
	);
};

export default PublicationBoldText;
