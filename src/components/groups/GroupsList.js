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

	const membersOfTeam = data.members.filter((item) => {
		const teamMembers =
			item.groups.includes(teamName) && !item.group_leader.includes(teamName);
		return teamMembers;
	});

	const teamGroupLeader = data.members.filter((item) =>
		item.group_leader.includes(teamName)
	);

	const sortarray = membersOfTeam.sort((a, b) => {
		if (a.level > b.level) {
			return -1;
		}
		if (a.level < b.level) {
			return 1;
		}
		return 0;
	});

	return (
		<div className='group-list'>
			<ListGroup variant='flush'>
				<ListGroup.Item key={teamGroupLeader[0].id} className='group-list-item'>
					<Link
						to={`/members/${teamGroupLeader[0].id}`}
						style={{ textDecoration: 'none', color: '#000' }}
					>
						{teamGroupLeader[0].academic_title} {teamGroupLeader[0].name} (Group
						leader)
					</Link>
				</ListGroup.Item>
				{sortarray.map((item, index) => (
					<ListGroup.Item key={item.id} className='group-list-item'>
						<Link
							to={`/members/${item.id}`}
							style={{ textDecoration: 'none', color: '#000' }}
						>
							{item.academic_title} {item.name}
						</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};
export default GroupsList;
