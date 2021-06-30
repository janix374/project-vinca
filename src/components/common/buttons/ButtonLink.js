import React from 'react';

const ButtonLink = ({ title, link }) => (
	<div className='button-link'>
		<a href={link} target='_blank' rel='noreferrer'>
			<span>{title}</span>
		</a>
	</div>
);

export default ButtonLink;
