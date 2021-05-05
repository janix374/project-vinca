import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

const MembersList = (props) => {
	const { data, teamName, errors } = props;
	const { url } = useRouteMatch();

	if (errors) {
		return <p>list members cannot be loaded</p>;
	}

	const membersOfTeam = data.filter((item) =>
		item.on_project.includes(teamName)
	);

	return (
		<div>
			<ListGroup>
				{membersOfTeam.map((item) => (
					<ListGroup.Item key={item.id}>
						<Link to={`${url}/${item.id}`}>
							{item.academic_title} {item.name}
						</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};
export default MembersList;
