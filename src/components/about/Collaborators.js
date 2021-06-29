import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollaborators } from '../../store/actions/collaboratorsActions';
import { selectAllCollaborators } from '../../store/selectors/selector';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Collaborators = () => {
	const dispatch = useDispatch();
	const { collaborators, error, loading } = useSelector(selectAllCollaborators);

	useEffect(() => {
		dispatch(getAllCollaborators());
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
		<Container className='collaborators'>
			<Row className='mt-5'>
				<Col xs={12}>
					<p className='text-justify collaborators-class'>
						The success of the Center&apos;s associates is reflected in their
						ability to establish and nurture long-term collaborations that have
						resulted in: joint patents and works in peer-reviewed international
						journals, joint projects, professional training of young researchers
						in partner institutions, joint organization of international
						gatherings and other related activities that all contribute
						long-term sustainability of the Center of Excellence.
					</p>
				</Col>
			</Row>
			<Row className=''>
				<Col xs={12} className='mb-3 '>
					{' '}
					<h5 className='collaborators-class'>List of collaborators:</h5>
				</Col>
				<Col xs={12} sm={3} />
				<Col xs={12} sm={6} className='mt-3 mb-3'>
					<h5 className='collaborators-class'>Opto-biomedical engineering</h5>
					<div className='collaboratorsInstitution'>
						<ul>
							{collaborators.opto_biomedical_engineering &&
								collaborators.opto_biomedical_engineering.map((item) => (
									<li key={item.id}>
										<a href={item.link} target='_blank' rel='noreferrer'>
											{item.name_of_collaborator}
										</a>
									</li>
								))}
						</ul>
					</div>
				</Col>
				<Col xs={12} sm={3} />
				<Col xs={12} sm={3} />
				<Col xs={12} sm={6} className='mt-3 mb-3'>
					<h5 className='collaborators-class'>
						Investigation of complex systems in biology and physics
					</h5>
					<div className='collaboratorsInstitution'>
						<ul>
							{collaborators.investigation_of_complex_systems_in_biology_and_physics &&
								collaborators.investigation_of_complex_systems_in_biology_and_physics.map(
									(item) => (
										<li key={item.id}>
											<a href={item.link} target='_blank' rel='noreferrer'>
												{item.name_of_collaborator}
											</a>
										</li>
									)
								)}
						</ul>
					</div>
				</Col>
				<Col xs={12} sm={3} />
				<Col xs={12} sm={3} />
				<Col xs={12} sm={6} className='mt-3 mb-3'>
					<h5 className='collaborators-class'>
						Photodynamic therapy development
					</h5>
					<div className='collaboratorsInstitution'>
						<ul>
							{collaborators.photodynamic_therapy_development &&
								collaborators.photodynamic_therapy_development.map((item) => (
									<li key={item.id}>
										<a href={item.link} target='_blank' rel='noreferrer'>
											{item.name_of_collaborator}
										</a>
									</li>
								))}
						</ul>
					</div>
				</Col>
				<Col xs={12} sm={3} />
			</Row>
		</Container>
	);
};

export default Collaborators;
