import React from 'react';

const GoogleMapIframe = () => (
	<div className='google-map-responsive'>
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6738.017513254816!2d20.594040340726146!3d44.760671971813565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a77bd70f1af15%3A0x6e2717a482120a4e!2sVin%C4%8Da%20Nuclear%20Research%20Institute!5e0!3m2!1sen!2srs!4v1623748074236!5m2!1sen!2srs'
			width='600'
			height='450'
			allowFullScreen=''
			loading='lazy'
			title='Vinca Google Map'
		/>
	</div>
);

export default GoogleMapIframe;
