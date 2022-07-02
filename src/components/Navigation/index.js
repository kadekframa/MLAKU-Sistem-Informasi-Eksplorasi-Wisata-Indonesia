import React, { useState } from 'react';
import { logoutUser } from '../../utils/AuthHandler';
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
import Logo from '../../assets/images/mlaku-logo-sm.png';
import './Navigation.css'

const Navigation = (props) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  let userProfile;
  if (!props.user) {
    userProfile = (
      <>
        <NavItem>
          <NavLink href="/register" className='auth-item'>
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login" className='auth-item login-item'>
            Login
          </NavLink>
        </NavItem>
      </>
    )
  } else {
    userProfile = (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>{props.user.fullname}</DropdownToggle>

        <DropdownMenu light end>
          <DropdownItem className='dropdon-click'>
            <NavLink onClick={logoutUser}>Logout</NavLink>
          </DropdownItem>
          {/* <DropdownItem divider /> */}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  return (
    <Navbar color="light" expand="md" light className='shadow-sm px-0 px-lg-4'>
      <NavbarBrand href="/" className='d-flex align-items-center navigation-mlaku'>
        <img className="img-fluid" src={Logo} alt="Logo Mlaku" />
        <span className="navbar logo-text ms-lg-3">Mlaku</span>
      </NavbarBrand>

      <NavbarToggler onClick={() => { setNavbarOpen(!isNavbarOpen) }} />

      <Collapse isOpen={isNavbarOpen} className='item-navigation-wrapper' navbar>
        <Nav className="mas-auto" navbar>
          <NavItem className='ms-lg-4'>
            <NavLink href="/">
              Home
            </NavLink>
          </NavItem>

          <UncontrolledDropdown inNavbar nav className='ms-lg-4'>
            <DropdownToggle caret nav>Category</DropdownToggle>

            <DropdownMenu light end>
              <DropdownItem className='dropdon-click'>
                <NavLink href="object-tourism">
                  Object Tourism
                </NavLink>
              </DropdownItem>

              <DropdownItem className='dropdon-click'>
                <NavLink href="/culinary">
                  Culinary
                </NavLink>
              </DropdownItem>

              <DropdownItem className='dropdon-click'>
                <NavLink href="/accomodation">
                  Accommodation
                </NavLink>
              </DropdownItem>
            </DropdownMenu>

          </UncontrolledDropdown>

          <NavItem className='ms-lg-4'>
            <NavLink href="/about">
              About Us
            </NavLink>
          </NavItem>

        </Nav>
        <Nav className="ms-auto user-profile-setting" navbar>
          {userProfile}
        </Nav>
      </Collapse>

    </Navbar>
  )
}

export default Navigation;
