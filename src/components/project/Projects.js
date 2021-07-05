import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/actions/projectsActions';
import { selectAllProjects } from '../../store/selectors/selector';
import Project from './Project';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Projects = () => {
	const dispatch = useDispatch();
	const { projects, loading, error } = useSelector(selectAllProjects);

	console.log(projects);
	useEffect(() => {
		dispatch(getAllProjects());
	}, [dispatch]);

	if (error) {
		return (
			<ErrorsMsg>
				<h2>Something went wrong!</h2>
			</ErrorsMsg>
		);
	}

	if (loading) {
		return <LoadingComponent />;
	}

	return (
		<Container>
			<Row className='mt-5'>
				<Col>
					<Project />
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
