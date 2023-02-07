import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

import PageLink from "./PageLink";
import AnchorLink from "./AnchorLink";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          {/* <Image src={"/DCI.png"} alt="Picture of the author" width="150" height="150" /> */}
          {/* <NavbarBrand className="logo" /> */}
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="w-100 d-flex justify-content-start mr-auto " navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="/" className="nav-link" testId="navbar-home">
                  HOME
                </PageLink>
              </NavItem>
              {user && (
                <>
                  <NavItem>
                    <PageLink href="/userprofile" className="nav-link" testId="navbar-csr">
                      PROFILE
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/connect" className="nav-link" testId="navbar-ssr">
                      CONNECT
                    </PageLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn login-button btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    LOGIN
                  </AnchorLink>
                </NavItem>
              )}
              {user && (
                <NavItem id="qsLogoutBtn">
                  <AnchorLink href="/api/auth/logout" className="btn logout-button" testId="navbar-logout-desktop">
                    LOGOUT
                  </AnchorLink>
                </NavItem>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink href="/api/auth/login" className="login-button" tabIndex={0} testId="navbar-login-mobile">
                  LOGIN
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between text-center"
                navbar
                data-testid="navbar-menu-mobile">
                <AnchorLink href="/api/auth/logout" className="btn logout-button p-2" testId="navbar-logout-mobile">
                  LOGOUT
                </AnchorLink>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
