import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollaborators } from '../../store/actions/collaboratorsActions';
import { selectAllCollaborators } from '../../store/selectors/selector';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';
import ButtonActionFullBackground from '../common/buttons/ButtonActionFullBackground';

const Collaborators = () => {
	const dispatch = useDispatch();
	const { collaborators, error, loading } = useSelector(selectAllCollaborators);
	const [displayA, setDisplayA] = useState(true);
	const [displayB, setDisplayB] = useState(false);
	const [displayC, setDisplayC] = useState(false);

	const handleClickA = () => {
		setDisplayA(true);
		setDisplayB(false);
		setDisplayC(false);
	};

	const handleClickB = () => {
		setDisplayA(false);
		setDisplayB(true);
		setDisplayC(false);
	};

	const handleClickC = () => {
		setDisplayA(false);
		setDisplayB(false);
		setDisplayC(true);
	};

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
			<Row>
				<Col xs={12} sm={2} />
				<Col xs={12} sm={8} className='mb-3 '>
					<h5 className='collaborators-class'>List of collaborators</h5>
				</Col>
				<Col xs={12} sm={2} />
				<Col xs={12} sm={2} />
				<Col xs={12} sm={8}>
					<div className='collaborators-buttons-container'>
						<div className='collaborators-buttons mt-3'>
							<ButtonActionFullBackground
								title='Opto-biomedical engineering'
								handleClick={handleClickA}
								focusButton={displayA}
							/>
						</div>
						<div className='collaborators-buttons mt-3'>
							<ButtonActionFullBackground
								title='Investigation of complex systems in biology and physics'
								handleClick={handleClickB}
								focusButton={displayB}
							/>
						</div>
						<div className='collaborators-buttons mt-3'>
							<ButtonActionFullBackground
								title='Photodynamic therapy development'
								handleClick={handleClickC}
								focusButton={displayC}
							/>
						</div>
					</div>
				</Col>
				<Col xs={12} sm={2} />
				<Col xs={12} sm={2} />
				<Col xs={12} sm={8} className='mt-3 mb-3'>
					<div className='collaboratorsInstitution-container'>
						<div
							className='collaboratorsInstitution-a'
							style={{ display: displayA ? 'block' : 'none' }}
						>
							<p>Opto-biomedical engineering</p>
							<ul>
								{collaborators.opto_biomedical_engineering &&
									collaborators.opto_biomedical_engineering.map((item) => (
										<li
											key={item.id}
											style={{
												listStyleImage: `url(${process.env.PUBLIC_URL}/assets/images/logo/play_black.png)`,
											}}
										>
											<a href={item.link} target='_blank' rel='noreferrer'>
												{item.name_of_collaborator}
											</a>
										</li>
									))}
							</ul>
						</div>
						<div
							className='collaboratorsInstitution-b'
							style={{ display: displayB ? 'block' : 'none' }}
						>
							<p>Investigation of complex systems in biology and physics</p>
							<ul>
								{collaborators.investigation_of_complex_systems_in_biology_and_physics &&
									collaborators.investigation_of_complex_systems_in_biology_and_physics.map(
										(item) => (
											<li
												key={item.id}
												style={{
													listStyleImage: `url(${process.env.PUBLIC_URL}/assets/images/logo/play_black.png)`,
												}}
											>
												<a href={item.link} target='_blank' rel='noreferrer'>
													{item.name_of_collaborator}
												</a>
											</li>
										)
									)}
							</ul>
						</div>
						<div
							className='collaboratorsInstitution-c'
							style={{ display: displayC ? 'block' : 'none' }}
						>
							<p>Photodynamic therapy development</p>
							<ul>
								{collaborators.photodynamic_therapy_development &&
									collaborators.photodynamic_therapy_development.map((item) => (
										<li
											key={item.id}
											style={{
												listStyleImage: `url(${process.env.PUBLIC_URL}/assets/images/logo/play_black.png)`,
											}}
										>
											<a href={item.link} target='_blank' rel='noreferrer'>
												{item.name_of_collaborator}
											</a>
										</li>
									))}
							</ul>
						</div>
					</div>
				</Col>
				<Col xs={12} sm={2} />
			</Row>
		</Container>
	);
};

export default Collaborators;
