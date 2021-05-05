import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	HashRouter,
} from 'react-router-dom';
import NavigationComponent from './navigation/NavigationComponent';
import Home from './home/Home';
import Publication from './publication/Publication';
import History from './about/History';
import Gallery from './about/gallery/Gallery';
import Documents from './about/Documents';
import Contact from './about/Contact';
import Project from './project/Project';
import Header from './header/Header';
import Members from './members/Members';
import Member from './members/Member';
import News from './news/News';
import NotFoundPage from './notfound/NotFoundPage';

const AppComponent = () => (
	<HashRouter>
		<div>
			<Header basename='/' />
			<NavigationComponent />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about/history' exact>
					<History />
				</Route>
				<Route path='/about/gallery' exact>
					<Gallery />
				</Route>
				<Route path='/about/documents' exact>
					<Documents />
				</Route>
				<Route path='/about/contact' exact>
					<Contact />
				</Route>

				<Route exact path='/members'>
					<Members />
				</Route>
				<Route exact path='/members/:memberId' component={Member} />

				<Route path='/project' exact>
					<Project />
				</Route>
				<Route path='/publication' exact>
					<Publication />
				</Route>
				<Route path='/news' exact>
					<News />
				</Route>

				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</div>
	</HashRouter>
);

export default AppComponent;
