import React, { Component } from 'react';
import  {Navbar, Nav} from 'react-bootstrap'

class Navigator extends Component {  
    render() {
        return (
            <div className="container-sm">
            <Navbar className="Navbar" variant="dark" collapseOnSelect expand="md">
                <Navbar.Brand className="brand">
                   MadeInDreams.ca
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link  eventKey="1" href="/#home">Home</Nav.Link>
                        <Nav.Link  eventKey="2" href="/#midex">Midex</Nav.Link>
                        <Nav.Link  eventKey="3"href="/#team" >Team</Nav.Link>
                        <Nav.Link  eventKey="4"href="/#contact" >Contact</Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
   }
  
}
  
  
  
  
  export default Navigator