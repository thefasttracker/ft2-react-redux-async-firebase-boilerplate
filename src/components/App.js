import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import Main from './Main'

function mapStateToProps(state, ownProps) {
	return {
		state,
		ownProps
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		actions, dispatch
	)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App