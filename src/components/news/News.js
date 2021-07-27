import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';
import SingleNews from './SingleNews';
import { getAllNews } from '../../store/actions/newsActions';
import { selectAllNews } from '../../store/selectors/selector';

const News = () => {
	const dispatch = useDispatch();
	const { news, loading, error } = useSelector(selectAllNews);

	useEffect(() => {
		dispatch(getAllNews());
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
				<Col xs={12}>
					<h3 className='text-center'>News</h3>
				</Col>
				{news.news &&
					news.news.map((item) => (
						<Col key={item.news_id} sm={12} md={6}>
							<SingleNews />
						</Col>
					))}
			</Row>
		</Container>
	);
};
export default News;
