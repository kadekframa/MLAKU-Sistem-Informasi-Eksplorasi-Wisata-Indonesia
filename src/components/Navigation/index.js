import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Logo from '../../assets/images/mlaku-logo.png';
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar className='navbar' expand="md"  light>
      <div className='navbar-wrapper'>
        <NavbarBrand href="/">
          <img src={Logo} alt="mlaku-logo" className='brand-logo' />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse className='collapse-nav' navbar>
          <Nav className="me-auto nav" navbar >
            <div className='menu-wrapper'>
              <NavItem className='item'>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className='item'>
                <NavLink href="object-tourism">
                  ObjectTourism
                </NavLink>
              </NavItem>
              <NavItem className='item'>

                <NavLink href="/culinary">
                  Culinary
                </NavLink>
              </NavItem>

              <NavItem className='item'>
                <NavLink href="/accommodation">
                  Accommodation
                </NavLink>
              </NavItem>

              <NavItem className='item'>
                <NavLink href="/about">
                  About Us
                </NavLink>
              </NavItem>
            </div>
            
            <NavItem className='login-item'>
              <NavLink href="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation;
