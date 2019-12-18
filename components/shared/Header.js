import React, { Component, useState, Fragment } from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import auth0 from '../../services/auth';


const NavLink = (props) => {
    const { route, title } = props;
    const className = props.className || "";
    
    return (
        <ActiveLink activeClassName="active" route={route}>
            <a className={`nav-link ${className}`}> {title} </a>
        </ActiveLink>
    )
};

const Login = () => {
    return (
      <span onClick={auth0.login} className="nav-link clickable"> Login </span>
    )
}
  
const Logout = () => {
    return (
        <span onClick={auth0.logout} className="nav-link clickable"> Logout </span>
    )
}

export default class Header extends Component { 
    constructor(props) {
    super(props);

        this.state = {
            isOpen: false,
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    
    render() {
        const { isAuthenticated } = this.props;
        const { isOpen } = this.state;

        const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

        return (
            <header className='header-wrap'>
              <Container>
                  <Navbar className={`navbar-light ${menuOpenClass}`} expand="lg">
                      <NavbarBrand href="/">Camto's portfolio</NavbarBrand>
                      <NavbarToggler onClick={this.toggle}/>
                      <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink route="/" title="Home" />
                                </NavItem>
                                <NavItem>
                                    <NavLink route="/about" title="About" />
                                </NavItem>
                                <NavItem>
                                    <NavLink route="/portfolio" title="Portfolio" />
                                </NavItem>
                                <NavItem>
                                    <NavLink route="/resume" title="Resume" />
                                </NavItem>
                                { !isAuthenticated &&
                                    <NavItem>
                                        <Login />
                                    </NavItem>
                                }
                                { isAuthenticated &&
                                    <NavItem>
                                        <Logout />
                                    </NavItem>
                                }
                            </Nav>
                      </Collapse>
                  </Navbar>
              </Container>
            </header>
        );

    }

}