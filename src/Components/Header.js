import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavbarWrapper light expand="lg" fixed="top">
      <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/"> <img src={logo} alt="store" className="navbar-brand" /></NavbarBrand>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <StyledDropdownToggle nav caret>
                Why Tippa
              </StyledDropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <StyledLink to="/why-us">
                 <FontAwesomeIcon icon={faUserCheck} className="mr-3"/>Why Choose Us</StyledLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <StyledLink to="/what-we-do"><FontAwesomeIcon icon={faPeopleCarry} className="mr-3"/>What We Do</StyledLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <StyledLink to="/"><FontAwesomeIcon icon={faBoxOpen} className="mr-3"/>Our Products</StyledLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink><StyledLink to="/">Product Page</StyledLink></NavLink>
            </NavItem>
             <NavItem>
              <NavLink><StyledLink to="/">Services Page</StyledLink></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <StyledDropdownToggle nav caret>
                Learn More
              </StyledDropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <StyledLink to="/"><FontAwesomeIcon icon={faUsers} className="mr-3"/>About Us</StyledLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <StyledLink to="/"><FontAwesomeIcon icon={faBookOpen} className="mr-3"/>Blog</StyledLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <StyledLink to="/"><FontAwesomeIcon icon={faHandshake} className="mr-3"/>Careers</StyledLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <StyledDropdownToggle nav caret>
                Support
              </StyledDropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <StyledLink to="/"><FontAwesomeIcon icon={faHeadset} className="mr-3"/>Quick help</StyledLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <StyledLink to="/"><FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>Contact Us</StyledLink>
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink><StyledLink to="/">Fast Order</StyledLink></NavLink>
            </NavItem>
             
          </Nav>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink><StyledLink to="/">Login</StyledLink></NavLink>
            </NavItem>
          <NavItem>
              <NavLink><SignUpLink to="/">Create Free Account</SignUpLink></NavLink>
            </NavItem>
            
          </Nav>
          <FlagContainer><img src= "img/ng.svg" style={{width:"1.4em"}} alt="tippa flag"/></FlagContainer>
          

        
        </Collapse>
      </NavbarWrapper>
    </div>
  );
}

export default Header;


const NavbarWrapper = styled(Navbar) `
background-color: var(--lightBack)!important;
padding: 0.3rem 3rem !important;

@media (max-width:1200px){
  padding: 0.3rem 0.5rem !important;
}

`

const StyledLink =styled(Link) `
font-weight:500;
color:var(--mainBlue);


@media (max-width:992px){
 font-size:0.8rem;
}

&:hover{
  text-decoration:none;
  color:var(--mainOrange);
}
`
const StyledDropdownToggle = styled(DropdownToggle) `
font-weight:500;
color:var(--mainBlue)!important;
@media (max-width:992px){
 font-size:0.8rem;
}

`
const SignUpLink =styled(Link) `
padding:0.5em 1em;
background-color:var(--mainGreen);
color:var(--mainAsh);
border-radius: 2em;

&:hover{
  text-decoration:none;
  background-color:var(--mainOrange);
  color:var(--lightBack);
}
@media (max-width:992px){
 font-size:0.8rem;
}
`
const FlagContainer =styled.div `
width:1.4em;

`
// const StyledDropdownToggle = styled(DropdownToggle) `
// font-weight:500;
// color:var(--mainBlue);
// `