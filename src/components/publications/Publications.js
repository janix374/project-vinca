import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';
import { getAllPublications } from '../../store/actions/publicationsActions';
import { selectAllPublications } from '../../store/selectors/selector';
import ButtonActionFullBackgrounfTwo from '../common/buttons/ButtonActionFullBackgrounfTwo';

const Publications = () => {
	const dispatch = useDispatch();
	const { publications, loading, error } = useSelector(selectAllPublications);
	const [showAllPublication, setShowAllPublication] = useState(true);
	const [publicationByYear, setPublicationByYear] = useState({});
	const [focusButtonIndex, setFocusButtonIndex] = useState(null);

	useEffect(() => {
		dispatch(getAllPublications());
	}, [dispatch]);

	const handleOnClickPublicationByyear = (indexYear) => {
		setPublicationByYear(publications.publications[indexYear]);
		setFocusButtonIndex(indexYear);
		setShowAllPublication(false);
	};

	const handleOnClickaPublication = () => {
		setShowAllPublication(true);
		setPublicationByYear({});
		setFocusButtonIndex(null);
	};

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
		<Container className='publications-container'>
			<Row className='mt-5'>
				<Col xs={12}>
					<h3 className='text-center'>Publications</h3>
					<div className='publications-button'>
						<ButtonActionFullBackgrounfTwo
							title='All'
							handleClick={handleOnClickaPublication}
							focusButton={showAllPublication}
						/>
						{publications.publications &&
							publications.publications.map((item, index) => (
								<ButtonActionFullBackgrounfTwo
									key={item.year}
									title={item.year}
									handleClick={() => handleOnClickPublicationByyear(index)}
									focusButton={focusButtonIndex === index}
								/>
							))}
					</div>
				</Col>
				{showAllPublication ? (
					<Col xs={12}>
						{publications.publications &&
							publications.publications.map((item) => (
								<div key={item.year} className='publications-container-text'>
									<h4>{item.year}</h4>
									{item.publications_by_year.map((itemNested) => (
										<p key={itemNested.id}>{itemNested.publication}</p>
									))}
								</div>
							))}
					</Col>
				) : (
					<Col xs={12}>
						<div className='publications-container-text'>
							<h4>{publicationByYear.year}</h4>
							{publicationByYear.publications_by_year.map((itemNested) => (
								<p key={itemNested.id}>{itemNested.publication}</p>
							))}
						</div>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default Publications;
