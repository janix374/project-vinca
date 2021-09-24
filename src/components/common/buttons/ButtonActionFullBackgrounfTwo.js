import React from 'react';

const ButtonActionFullBackgrounfTwo = ({
	title,
	handleClick,
	focusButton = false,
}) => (
	<button
		type='button'
		onClick={handleClick}
		className={
			focusButton === true
				? 'button-action-full-background-two button-action-full-background-two-active'
				: 'button-action-full-background-two'
		}
	>
		{title}
	</button>
);

export default ButtonActionFullBackgrounfTwo;
