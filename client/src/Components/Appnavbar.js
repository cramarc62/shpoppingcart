import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default class Appnavbar extends Component {
    state={
        isOpen:false
    }

    toggle =()=>{
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="mb-4 nav nav-tabs" expand="lg">
                <Navbar.Brand >
                    <Link to="/" className="mr-3" >ShoppingCart</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/home" className="mr-3" >Home</Link>
                        <Link to="/allitems" className="mr-3" >Products</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
