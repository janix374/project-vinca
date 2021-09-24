import React from 'react';

const ButtonActionFullBackground = ({
	title,
	handleClick,
	focusButton = false,
}) => (
	<div
		className={
			focusButton === true
				? 'button-action-full-background button-action-full-background-active'
				: 'button-action-full-background'
		}
	>
		<button type='button' onClick={handleClick}>
			{title}
		</button>
	</div>
);

export default ButtonActionFullBackground;
