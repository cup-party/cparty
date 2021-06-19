import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
const CustomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">CParty</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/">
              <NavItem>
                <Nav>Home</Nav>
              </NavItem>
            </Link>

            <Link to="/restro">
              <NavItem>
                <Nav>Restro</Nav>
              </NavItem>
            </Link>

            <Link to="/cart">
              <NavItem>
                <Nav>Cart</Nav>
              </NavItem>
            </Link>
            
            <Link to="/order">
              <NavItem>
                <Nav>Order</Nav>
              </NavItem></Link>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;