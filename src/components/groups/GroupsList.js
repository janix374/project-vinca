import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GroupsList = (props) => {
	const { data, teamName } = props;
	const { url } = useRouteMatch();

	if (data.length === 0) {
		return <p>list members cannot be loaded</p>;
	}

	const membersOfTeam = data.members.filter((item) =>
		item.on_project.includes(teamName)
	);

	return (
		<div>
			<ListGroup>
				{membersOfTeam.map((item) => (
					<ListGroup.Item key={item.id}>
						<Link to={`${url}/${item.id}`}>
							{item.academic_title} {item.name} ({item.job_title})
						</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};
export default GroupsList;
