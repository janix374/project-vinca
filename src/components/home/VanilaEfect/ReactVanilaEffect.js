import React from 'react';

const ReactVanilaEffect = () => {
	console.log('ddd');
	return (
		<div className='flex-container'>
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
							{/* <img
								src={`${process.env.PUBLIC_URL}/assets/images/logo/logo_coherence.jpg`}
								alt='coherence'
							/> */}
							<h4>COHERENCE</h4>
						</div>

						{/* <h5>WELCOME TO COHERENCE PRESENTATION WEBPAGE!</h5> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReactVanilaEffect;
