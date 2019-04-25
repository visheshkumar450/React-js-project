import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavDropdown } from 'react-bootstrap';
export default class Navb extends Component {
  render() {
    const {detail}=this.props
    return (
      <Navbar className="background sticky-top" expand="lg" >
        <a href="#" className="hove">TechBOT</a>
        
        <form className="form-inline">
           <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
           <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
        <Nav>
          <NavDropdown  title="PRODUCTS" id="basic-nav-dropdwon" className="changes">
             <NavDropdown.Item href="#" target="_blank" className="dropdown-list-changes" >Racing Bots</NavDropdown.Item><hr/>
             <NavDropdown.Item href="#" className="dropdown-list-changes">Bots</NavDropdown.Item><hr/>
             <NavDropdown.Item href="#" className="dropdown-list-changes">Chat Bots</NavDropdown.Item><hr/>
             <NavDropdown.Item href="#" className="dropdown-list-changes">Social Bots</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown  title="SERVICES" id="basic-nav-dropdwon" className="changes">
            <NavDropdown.Item href="#" className="dropdown-list-changes">Home Services</NavDropdown.Item><hr/>
            <NavDropdown.Item href="#" className="dropdown-list-changes">Office Service</NavDropdown.Item><hr/>
            <NavDropdown.Item href="#" className="dropdown-list-changes">School Service</NavDropdown.Item><hr/>
            <NavDropdown.Item href="#" className="dropdown-list-changes">Any Other Service</NavDropdown.Item>
          </NavDropdown>
          
          
          </Nav>
          <a className="changes" href="#about">ABOUT</a>
          <a className="changes" href="#contact">CONTACT US</a>

          
      </Navbar>

    
    )
  }
}
