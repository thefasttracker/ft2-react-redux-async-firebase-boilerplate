import React, {Component, PropTypes} from 'react'
import {Link, IndexLink, RouteHandler} from 'react-router'

export default class Nav extends Component {
	// componentDidMount() { 
	// 	document.querySelector(".container").className="container-fluid"
 //    }
    
	render(){
		return (
			<nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/"
                    className="navbar-brand" 
                    activeClassName='active-link' 
                    activeStyle={{textDecoration:'none'}}>
                      Home
            </Link>
          </div>

          
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/contacts" 
                  activeClassName='active-link' 
                  activeStyle={{textDecoration:'none'}}>
                      Contacts
                </Link>
              </li>
            </ul>
            
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login"
                    activeClassName='active-link' 
                    activeStyle={{textDecoration:'none'}}>
                      Login
                  </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
	}
}