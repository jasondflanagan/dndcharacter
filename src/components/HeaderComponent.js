import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar sticky="top" expand="md">
                    <div className="container" id="nav-row">
                        <div className="row">
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem >
                                            <NavLink className="nav-link-header" to="/home">
                                                <i className="fa fa-university fa-lg" /> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link-header"  to="/races">
                                                <i className="fa fa-list fa-lg" /> Races
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link-header" to="/classes">
                                                <i className="fa fa-info fa-lg" /> Classes
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link-header" to="/builder">
                                                <i className="fa fa-wrench fa-lg" /> Character Builder
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                                <NavbarToggler onClick={this.toggleNav}><img src="/assets/navtoggle.png" height="20" width="30" alt="burger menu icon" /></NavbarToggler>
                            </div>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Header;