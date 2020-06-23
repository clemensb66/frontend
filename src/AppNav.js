import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

class AppNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Open API - FrontEnd</NavbarBrand>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/letters">Letters of Credit</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
          
         );
    }
}
 
export default AppNav;