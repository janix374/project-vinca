import React from 'react';

const ButtonAction = ({ title, handleClick }) => (
	<div className='button-action'>
		<button type='button' onClick={handleClick}>
			{title}
		</button>
	</div>
);

export default ButtonAction;
