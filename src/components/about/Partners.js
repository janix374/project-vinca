import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Partners = () => {
	const a = 'sss';
	return (
		<Container>
			<Row className='mt-5 partnersrow mb-5'>
				<Col xs={12}>
					<h4>
						Vinča Institute of Nuclear Sciences, National Institute of the
						Republic of Serbia
					</h4>
					<p className='text-justify mt-3 mb-3'>
						Vinča Institute of Nuclear Sciences (INNV) is regarded as Serbia’s
						leading scientific institute in fundamental and applied research,
						owing to its size, scientific productivity, international reputation
						in research, and the quality of its scientific personnel and
						research facilities. INNV is a member of the University of Belgrade
						and the scientific staff of the Institute significantly contributes
						to the process of knowledge exchange in science-education model in
						Serbia. Over the past seventy years, more than 1000 Ph.D thesis have
						been made at the Institute. Today, the Institute with 311
						researchers and 210 Ph.D. students is the host for 73 national
						projects and more than 60 international projects classified as EU
						H2020, IEAE, COST, EUREKA, Erasmus+, Bilateral, as well as other
						international scientific research collaborations in which the
						Republic of Serbia is a member.
					</p>
					<div className='text-center'>
						<a
							href='https://www.vin.bg.ac.rs/en/'
							target='_blank'
							rel='noreferrer'
							className='btn btn-outline-info'
						>
							VISIT SITE
						</a>
					</div>
				</Col>
			</Row>
			<Row className='mt-5 partnersrow mb-5'>
				<Col xl={12}>
					<h4>School of Electrical Engineering, University of Belgrade</h4>
					<p className='text-justify mt-3 mb-3'>
						The School of Electrical Engineering at the University of Belgrade
						(ETF) was established in 1948. ETF is a top educational and
						scientific institution in the field of electrical engineering,
						computer science, photonics and nanomaterials. More than 1,000
						students enrol in BA, MS and PhD programmes every year. In
						particular, ETF group involved in this proposal has provided
						significant contributions in the field of semiconductor devices and
						nanostructures. To reach this goal, a specialized Center for
						nanostructures, nanoelectronics and nonophotonics (3N Center) was
						opened. The most noticeable achievements of the ETF group are
						related to the optimization of the optical properties of
						nanostructures. This group has established a host of numerical
						simulation techniques for the so-called &quot;quantum
						engineering&quot; that was applied in the design and optimization of
						the structural parameters.
					</p>
					<div className='text-center'>
						<a
							href='https://www.etf.bg.ac.rs/en#gsc.tab=0'
							target='_blank'
							rel='noreferrer'
							className='btn btn-outline-info'
						>
							VISIT SITE
						</a>
					</div>
				</Col>
			</Row>
			<Row className='mt-5 partnersrow mb-5'>
				<Col md={12}>
					<h4>Faculty of Sciences and Mathematics, University of Niš</h4>
					<p className='text-justify mt-3 mb-3'>
						The Faculty of Sciences and Mathematics (UNFSM), University of Niš,
						has been a credible educational institution for years, involved in
						both national and international research and innovation projects.
						UNFSM educates students in the fields of mathematics, computer
						science, physics, chemistry, biology and ecology, and geography.
						Over the past five years, the Faculty has participated in 38
						national and 18 international projects, as well as in COST actions
						and bilateral projects. The Faculty is currently involved in 11
						international projects (H2020, Erasmus+, COST, bilateral research
						projects). Also, the Faculty has been involved in European and
						global programs of academic mobility and exchange at all levels.
						Furthermore, the Faculty has experience in the coordination of
						science promotion projects and has been a significant contributor,
						participant, and coordinator of the European Researchers Night in
						the previous years.
					</p>
					<div className='text-center'>
						<a
							href='https://www.ni.ac.rs/en/faculties/faculty-of-sciences-and-mathematics'
							target='_blank'
							rel='noreferrer'
							className='btn btn-outline-info'
						>
							VISIT SITE
						</a>
					</div>
				</Col>
			</Row>
			<Row className='mt-5 partnersrow mb-5'>
				<Col md={12}>
					<h4>
						Department of Chemistry, Faculty of Science, University of
						Kragujevac
					</h4>
					<p className='text-justify mt-3 mb-3'>
						The Department of Chemistry is one of the organizational units of
						the Faculty of Science, University of Kragujevac. At the Department
						are organized bachelor, master and doctoral academic studies of
						chemistry. The Institute has well-equipped scientific research
						laboratories for inorganic, organic, analytical, physical chemistry,
						biochemistry and chemistry teaching methodology. About 24 teachers,
						4 assistants and 25 researchers, research associates and scholarship
						holders are engaged in several scientific research and other
						national and international projects. They publish the results of
						their research in well-known international scientific journals and
						cooperate with a large number of institutions in the country and
						abroad.
					</p>
					<div className='text-center'>
						<a
							href='http://chem.pmf.kg.ac.rs'
							target='_blank'
							rel='noreferrer'
							className='btn btn-outline-info'
						>
							VISIT SITE
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Partners;
