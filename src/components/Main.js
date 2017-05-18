import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import NavHeader from './Nav'

export default class Main extends Component {
	render() {
		return (
			<div className="container-fluid intro__background">
				{/*h1>Main</h1>*/}
				<NavHeader/>
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		)
	}
}