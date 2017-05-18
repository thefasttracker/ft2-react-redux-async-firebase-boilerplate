// Import React
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// Import Redux
import { Provider } from 'react-redux'

// Import Router
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes'
// console.log("routes -" , routes)

// Import Styles
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico

//firebase playground
import './firebase'


import configureStore from './store';
const store = configureStore();
store.subscribe(()=> console.log("new store ", store.getState()))

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

// import './styles/bootstrap.min.css'

// //foundation css
// import 'style!css!foundation-sites/dist/css/foundation.min.css'
// $(document).foundation();

// //app css
// import 'style!css!sass!applicationStyles'

render(
	<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>		
	</Provider>, 
	document.getElementById('app')
);