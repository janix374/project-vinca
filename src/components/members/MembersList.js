import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MembersList = (props) => {
	const { data, teamName } = props;
	const { url } = useRouteMatch();

	if (data.length === 0) {
		return <p>list members cannot be loaded</p>;
	}

	const membersOfTeam = data.members.filter((item) =>
		item.institution.includes(teamName)
	);

	return (
		<div className='members-institution-list'>
			<ListGroup variant='flush'>
				{membersOfTeam.map((item) => (
					<ListGroup.Item
						key={item.id}
						className='members-institution-list-item'
					>
						<Link
							to={`${url}/${item.id}`}
							style={{ textDecoration: 'none', color: '#000' }}
						>
							{item.academic_title} {item.name} ({item.job_title}){' '}
							{/* <img
								className='members-institution-list-item-photo'
								src={`${process.env.PUBLIC_URL}/assets/images/personal_image/${item.photo}`}
								alt='personal photos'
							/> */}
						</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};
export default MembersList;
