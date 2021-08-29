import React from 'react';
import { Card } from 'react-bootstrap';
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
			<div className='card-description'>{projectDescription}</div>
			<div className='container-card-button'>
				<div>Project type: {projectType}</div>
				<div>
					{projectLink.length > 0 ? (
						<ButtonLink title='Link' link={projectLink} />
					) : (
						''
					)}
				</div>
			</div>
		</Card.Body>
	</Card>
);

export default ProjectCard;
