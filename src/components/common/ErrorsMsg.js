import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorsMsg = (props) => (
	<Alert variant='danger' className='mt-1 text-center'>
		<Alert.Heading>{props.children}</Alert.Heading>
	</Alert>
);

export default ErrorsMsg;
