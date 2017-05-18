import React, {Component, PropTypes} from 'react'
import { Route, IndexRoute } from 'react-router'
import { RouteReducer } from 'react-router-redux'

import App from '../components/App'
import Main from '../components/Main'
import Nav from '../components/Nav'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={About}/>
		<Route path="contacts" component={Contacts}/>
		<Route path="login" component={Login}/>
		<Route path="*" component={NotFound}/>
	</Route>
)