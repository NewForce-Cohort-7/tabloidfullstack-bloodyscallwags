import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from '../Managers/UserProfileManager';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header({isLoggedIn, setIsLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //to use for verifying what userType the account is
  const localUser = localStorage.getItem("userProfile")
  const userObject = JSON.parse(localUser)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">Tabloid</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */ }
            {isLoggedIn &&
             <div style={{display: 'flex'}}>
              <NavItem>
                <NavLink tag={RRNavLink} to="/">Home</NavLink>
              </NavItem>
            {/* If a user is an admin, they will see the link to UserProfiles in the NavBar - might need to clean this up later. */}
            {userObject?.admin &&
            <><NavItem>
                    <NavLink tag={RRNavLink} to="/userProfilesList">User Profiles</NavLink>
                  </NavItem><NavItem>
                      <NavLink tag={RRNavLink} to="/categoriesList">Category Management</NavLink>
                    </NavItem></>
            }
            </div>
            }
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavItem>
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={() => {
                      logout()
                      setIsLoggedIn(false)
                    }}>Logout</a>
                </NavItem>
              </>
            }
            {!isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
