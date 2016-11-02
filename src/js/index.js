import '../scss/index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './modules/Home';

import D3_v4_er from './modules/D3_v4_er';
import ReadingEntitiesD3V4 from './modules/ReadingEntitiesD3V4';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/D3_v4_er" component={D3_v4_er}/>	
		<Route path="/ReadingEntitiesD3V4" component={ReadingEntitiesD3V4}/>	
	</Route>
  </Router>), 

document.getElementById('app'));

