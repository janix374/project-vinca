import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationComponent from './navigation/NavigationComponent';
import Home from './home/Home';
import Publication from './publication/Publication';
import History from './about/History';
import Gallery from './about/Gallery';
import Documents from './about/Documents';
import Contact from './about/Contact';
import Project from './project/Project';
import Header from './header/Header';
import Members from './members/Members';
import Member from './members/Member';
import News from './news/News';
import NotFoundPage from './notfound/NotFoundPage';

const AppComponent = () => (
	<Router>
		<div>
			<Header />
			<NavigationComponent />
			<Switch>
				<Route exact path='/' component={() => <Home />} />

				<Route path='/about/history' component={History} />
				<Route path='/about/gallery' component={Gallery} />
				<Route path='/about/documents' component={Documents} />
				<Route path='/about/contact' component={Contact} />

				<Route exact path='/members' component={Members} />
				<Route exact path='/members/:memberId' component={Member} />

				<Route path='/project' component={Project} />
				<Route path='/publication' component={Publication} />
				<Route path='/news' component={News} />

				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppComponent;
