import React from 'react';

const CardVanilaEffect = ({ title, text }) => {
	console.log('ddd');
	return (
		<div className='tilt-flex-container'>
			<div className='tilt-container'>
				<div className='tilt-box-wrap'>
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<div className='tilt-box'>
						<div className='title-box-img'>
							<h4>{title}</h4>
							<p>{text}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardVanilaEffect;
