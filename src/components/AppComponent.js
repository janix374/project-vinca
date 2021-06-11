import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// HashRouter,
} from 'react-router-dom';
import NavigationComponent from './navigation/NavigationComponent';
import Home from './home/Home';
import Contact from './contact/Contact';
import Gallery from './about/gallery/Gallery';
import Center from './about/Center';
import Partners from './about/Partners';
import Projects from './project/Projects';
import Header from './header/Header';
import Footer from './footer/Footer';
import Members from './members/Members';
import Member from './members/Member';
import News from './news/News';
import NotFoundPage from './notfound/NotFoundPage';
import Groups from './groups/Groups';
import Collaborators from './about/Collaborators';

const AppComponent = () => (
	<Router basename='/coherence'>
		<div>
			<Header />
			<NavigationComponent />
			<div className='page-container'>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/about/center' exact>
						<Center />
					</Route>
					<Route path='/about/institutions' exact>
						<Partners />
					</Route>
					<Route path='/about/collaborators' exact>
						<Collaborators />
					</Route>
					<Route path='/about/gallery' exact>
						<Gallery />
					</Route>
					<Route exact path='/members'>
						<Members />
					</Route>
					<Route exact path='/members/:memberId' component={Member} />
					<Route exact path='/groups'>
						<Groups />
					</Route>
					<Route path='/projects' exact>
						<Projects />
					</Route>
					<Route path='/news' exact>
						<News />
					</Route>
					<Route path='/contact' exact>
						<Contact />
					</Route>

					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>
	</Router>
);

export default AppComponent;
