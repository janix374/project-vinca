import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Laboratories = () => (
	<Container className='laboratories'>
		<Row className='mt-5 laboratories-show mb-5'>
			<h4>
				Center has four equipped laboratories, three of which are located in INN
				&quot;Vinča&quot; and one at the Faculty of Natural Sciences and
				Mathematics, University of Kragujevac.
			</h4>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col xs={12}>
				<h5>
					1. Optical laboratory (lab manager{' '}
					<Link to='/members/3'>Dr. Milutin Stepić</Link>)
				</h5>
				<p className='text-justify mt-3 mb-3'>
					The optical laboratory (established in 2008.) is the oldest laboratory
					of the Center situated in INN &quot;Vinča&quot;. The equipment from
					this laboratory is used by associates of all three groups of the
					Center for research: optical waveguides and localized structures,
					fiber-based optical sensors, the influence of coherent and incoherent
					light sources on nanocomposite systems in the fight against cancer,
					but also for promotional activities and student internship.
				</p>
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image2.jpg`}
					fluid
				/>
			</Col>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col xl={12}>
				<h5>
					2. Biochemical laboratory (lab manager{' '}
					<Link to='/members/9'>Dr. Maja Nešić</Link>)
				</h5>
				<p className='text-justify mt-3'>
					The primary objective of the Biochemical laboratory of the Center is
					to promote photodynamic therapy for cancer treatment as a particular
					field of biophotonics research.
				</p>
				<p className='text-justify'>
					The laboratory consists of two blocks: a block for cell culture and a
					block for chromatographic techniques and electrophoresis. The block
					for cell culture ensures a sterile and safe working environment with
					tumor and normal cell lines and biohazardous agents. It is equipped
					with a CO2 incubator, a biosafety cabinet, and an inverse Zeiss
					microscope. The space is organized for the purposes of examining
					photodynamic systems, as well as examining the effects of light itself
					on diverse tumor cell lines. Therefore it contains all the conditions
					for external light isolation. The sample preparation room is designed
					so that the sample preparation can be approached systematically and
					organized. The block for chromatographic techniques and
					electrophoresis contains all the necessary equipment and chemicals for
					thin-layer lipid chromatography and native electrophoresis for the
					separation and detection of proteins.
				</p>
				<p className='text-justifymb-3'>
					The lab staff has all the necessary technical and scientific knowledge
					and experience to handle issues related to the design of photodynamic
					systems, analysis, development, and optimization of processes
					regarding photodynamic therapy.
				</p>
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image10.jpg`}
					fluid
				/>
			</Col>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col md={12}>
				<h5>
					3. Laboratory for biomedical engineering (lab manager{' '}
					<Link to='/members/10'>Dr. Marija Ivanović </Link>)
				</h5>
				<p className='text-justify mt-3 mb-3' />
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image1.jpg`}
					fluid
				/>
			</Col>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col md={12}>
				<h5>
					4. Laboratory for preparation and characterization of transitional
					metal ions complexes (lab manager{' '}
					<Link to='/members/22'>Dr. Biljana Petrović</Link>)
				</h5>
				<p className='text-justify mt-3 mb-3'>
					The laboratory for the synthesis and characterization of the
					transition metal complexes is located at the Department of Chemistry,
					Faculty of Science, University of Kragujevac. It is equipped with two
					UV-Vis spectrophotometers, “stopped-flow” spectrophotometer,
					viscosimeter and potentiometric titrator.
				</p>
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image11.jpg`}
					fluid
				/>
			</Col>
		</Row>
	</Container>
);

export default Laboratories;
