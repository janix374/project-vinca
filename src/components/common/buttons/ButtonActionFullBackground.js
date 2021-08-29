import React from 'react';

const ButtonActionFullBackground = ({ title, handleClick }) => (
	<div className='button-action-full-background'>
		<button type='button' onClick={handleClick}>
			{title}
		</button>
	</div>
);

export default ButtonActionFullBackground;
