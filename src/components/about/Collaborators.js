import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Collaborators = () => {
	const a = 'sss';
	return (
		<Container>
			<Row className='mt-5'>
				<Col xs={12}>
					<p className='text-justify'>
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
			<Row className=''>
				<Col xs={12} className='mb-3'>
					{' '}
					<h5>List of collaborators:</h5>
				</Col>
				<Col xs={6}>
					<p>Opto-biomedical engineering</p>
					<div className='centerInstitution'>
						<ul>
							<li>
								<a
									href='https://www.aston.ac.uk/'
									target='_blank'
									rel='noreferrer'
								>
									Aston University
								</a>
							</li>
							<li>
								<a
									href='https://lens.unifi.it/'
									target='_blank'
									rel='noreferrer'
								>
									LENS
								</a>
							</li>
							<li>
								<a
									href='https://www.brescia.edu/'
									target='_blank'
									rel='noreferrer'
								>
									Brescia University
								</a>
							</li>
							<li>
								<a
									href='https://www.dtu.dk/english'
									target='_blank'
									rel='noreferrer'
								>
									Technical University of Denmark - DTU
								</a>
							</li>
							<li>
								<a href='http://med.bg.ac.rs/' target='_blank' rel='noreferrer'>
									Univerzitet u Beogradu, Medicinski fakultet
								</a>
							</li>
							<li>
								<a
									href='http://www.itn.sanu.ac.rs/'
									target='_blank'
									rel='noreferrer'
								>
									SANU
								</a>
							</li>
							<li>
								<a
									href='https://www.ikvbd.com/'
									target='_blank'
									rel='noreferrer'
								>
									KBC
								</a>
							</li>
							<li>
								<a href='https://www.fau.eu/' target='_blank' rel='noreferrer'>
									Friedrich-Alexander-Universität Erlangen-Nürnberg
								</a>
							</li>
							<li>
								<a
									href='https://www.bidmc.org/'
									target='_blank'
									rel='noreferrer'
								>
									Beth Israel Deaconess Medical Center | Harvard Medical School
								</a>
							</li>
						</ul>
					</div>
				</Col>
				<Col xs={6}>
					<p>Investigation of complex systems in biology and physics</p>
					<div className='centerInstitution'>
						<ul>
							<li>
								<a
									href='https://www.ibs.re.kr/eng.do'
									target='_blank'
									rel='noreferrer'
								>
									Institute for Basic Science
								</a>
							</li>
							<li>
								<a
									href='http://www.leeds.ac.uk/'
									target='_blank'
									rel='noreferrer'
								>
									University of Leeds
								</a>
							</li>
							<li>
								<a
									href='https://english.tau.ac.il/'
									target='_blank'
									rel='noreferrer'
								>
									Tel Aviv University
								</a>
							</li>
							<li>
								<a href='https://en.uoc.gr/' target='_blank' rel='noreferrer'>
									University of Crete
								</a>
							</li>
							<li>
								<a
									href='https://www.uni-rostock.de/en/'
									target='_blank'
									rel='noreferrer'
								>
									University of Rostock
								</a>
							</li>
							<li>
								<a
									href='https://www.uchile.cl/english'
									target='_blank'
									rel='noreferrer'
								>
									Universidad de Chile
								</a>
							</li>
							<li>
								<a href='https://liu.se/en' target='_blank' rel='noreferrer'>
									Linköping University
								</a>
							</li>
							<li>
								<a
									href='https://lens.unifi.it/'
									target='_blank'
									rel='noreferrer'
								>
									LENS
								</a>
							</li>
							<li>
								<a
									href='https://www.aston.ac.uk/'
									target='_blank'
									rel='noreferrer'
								>
									Aston University
								</a>
							</li>
							<li>
								<a
									href='https://www.hsu-hh.de/en/'
									target='_blank'
									rel='noreferrer'
								>
									Helmut Schmidt University
								</a>
							</li>
							<li>
								<a
									href='https://en.sdu.edu.cn/'
									target='_blank'
									rel='noreferrer'
								>
									Shandong University
								</a>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Collaborators;
