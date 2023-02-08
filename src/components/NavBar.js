import React from 'react'
import { Container, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top"><Container>
            <Navbar.Brand>
                <img src={logo} alt="logo" height="50" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Sign in</Nav.Link>
                    <Nav.Link>Sign up</Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar