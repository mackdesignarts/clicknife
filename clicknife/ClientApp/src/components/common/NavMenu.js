import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// import images from '../../res/images/main_logo.png';
import logo from '../../res/images/main_logo.png';
import './NavMenu.css';

console.log(logo);

class NavMenu extends Component {
    render() {
      return (
        <div>
            <img src={logo} className="main_logo" alt="Clickfinder Logo" />
        </div>
      );
    }
	}
	
export default connect()(NavMenu);