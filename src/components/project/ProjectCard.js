import React from 'react';
import { Card, Button, NavItem } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import ReadMore from '../common/readmore/ReadMore';
import ButtonLink from '../common/buttons/ButtonLink';

const ProjectCard = ({
	projectDescription,
	projectImage,
	projectName,
	projectType,
	projectLink,
}) => (
	<Card className='card-class'>
		<div
			className='card-image'
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/galleries/${projectImage})`,
			}}
		/>
		<Card.Body>
			<Card.Title>{projectName}</Card.Title>
			<Card.Text>
				<ReadMore>{projectDescription}</ReadMore>
			</Card.Text>
			<div className='container-card-button'>
				<div>Project type: {projectType}</div>
				<div>
					<ButtonLink title='Link' link={projectLink} />
				</div>
			</div>
		</Card.Body>
	</Card>
);

export default ProjectCard;
