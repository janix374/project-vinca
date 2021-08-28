import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/actions/projectsActions';
import { selectAllProjects } from '../../store/selectors/selector';
import ProjectCard from './ProjectCard';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Projects = () => {
	const dispatch = useDispatch();
	const { projects, loading, error } = useSelector(selectAllProjects);

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
		<Container className='project-container'>
			<Row className='mt-5'>
				<Col xs={12}>
					<h3 className='text-center'>Projects</h3>
				</Col>
				{projects.projects &&
					projects.projects.map((item) => (
						<Col key={item.project_id} sm={12}>
							<ProjectCard
								projectDescription={item.project_description}
								projectImage={item.project_image}
								projectName={item.project_name}
								projectType={item.project_type}
								projectLink={item.project_link}
							/>
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default Projects;
