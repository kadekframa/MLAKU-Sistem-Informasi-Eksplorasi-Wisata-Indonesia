import React from 'react';
import {logoutUser} from '../../utils/AuthHandler';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Logo from '../../assets/images/mlaku-logo.png';
import './Navigation.css'

const Navigation = (props) => {

  let userProfile;
  if(!props.user){
    userProfile = (
      <NavItem className='login-item'>
        <NavLink href="/login">
          Login
        </NavLink>
      </NavItem>
    )
  } else {
    userProfile = (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>{props.user.fullname}</DropdownToggle>

        <DropdownMenu light end>
          <DropdownItem>
            <NavLink onClick={logoutUser}>Logout</NavLink>
          </DropdownItem>
          {/* <DropdownItem divider /> */}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

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

            {userProfile}

          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation;