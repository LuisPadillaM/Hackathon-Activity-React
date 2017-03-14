import {Navbar, Nav, NavItem } from "react-bootstrap";

const NavInstance = ({options}) =>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
        <img className="logo" src={options.brandImage} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        { options.optionRight.map((option, i) =>
          <NavItem eventKey={i} href="#" className={ (i === 0 ? "active" : "") }>{option}</NavItem>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default NavInstance;
