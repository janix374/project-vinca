import React from 'react';

const CardVanilaEffect = () => (
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
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/logo/logo.png`}
							alt='logo'
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default CardVanilaEffect;
