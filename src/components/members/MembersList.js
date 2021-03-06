import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

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
							<div className='list-item-container'>
								<div className='list-item-title'>
									{item.academic_title} {item.name} ({item.job_title}){' '}
								</div>
								<div
									className='list-item-photo'
									style={{
										backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/personal_image/${item.photo})`,
									}}
								/>
							</div>
						</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};
export default MembersList;
